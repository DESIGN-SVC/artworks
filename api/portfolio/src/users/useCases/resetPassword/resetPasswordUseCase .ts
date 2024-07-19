
import { IUsersRepository } from '@users/repositories/usersRepository.type';
import 'dotenv/config'
import {  sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import jwtConfig from '@config/auth'
import { AppError } from '@shared/errors/appError';
import { sendResetPassword } from 'src/utils/sendResetPassword';


interface ResetPasswordProps {
    email: string,
}

@injectable()
export class ResetPasswordUseCase {
    constructor(
        @inject('UsersRepository') private usersRepository: IUsersRepository,
    ) { }
    async execute({ email }: ResetPasswordProps): Promise<void> {
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
            console.log(error)
            throw new AppError(error.message, 401)
        }
    }
}