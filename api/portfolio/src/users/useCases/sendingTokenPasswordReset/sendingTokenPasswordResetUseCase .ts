
import { IUsersRepository } from '@users/repositories/usersRepository.type';
import 'dotenv/config'
import {  sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import jwtConfig from '@config/auth'
import { AppError } from '@shared/errors/appError';
import { sendResetPassword } from 'src/utils/sendResetPassword';


interface SendingTokenPasswordResetProps {
    email: string,
}

@injectable()
export class SendingTokenPasswordResetUseCase {
    constructor(
        @inject('UsersRepository') private usersRepository: IUsersRepository,
    ) { }
    async execute({ email }: SendingTokenPasswordResetProps): Promise<void> {
        try {
            const user = await this.usersRepository.findByEmail(email)

            if (!user) {
                throw new AppError('User not found', 401)
            }
    
            if (!user.isVerified) {
                throw new AppError('Email not verified', 401)
            }
            const hashResetPasswordToken = sign(
                { email: email },
                jwtConfig.passwordToken.secret,
                { expiresIn: jwtConfig.emailToken.expiresIn }
            );
    
            await sendResetPassword({ email, token: hashResetPasswordToken, name: user.name })
    
            user.resetPasswordToken = hashResetPasswordToken
    
            await this.usersRepository.update(user)
        }
        catch (error) {

            throw new AppError(error.message, 401)
        }
    }
}