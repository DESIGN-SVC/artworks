
import { IUsersRepository } from '@users/repositories/usersRepository.type';
import 'dotenv/config'
import {  sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import jwtConfig from '@config/auth'
import { AppError } from '@shared/errors/appError';
import { sendVerificationEmail } from 'src/utils/sendVerificationEmail';


interface ResendTokenEmailProps {
    email: string,
}

@injectable()
export class ResendTokenEmailUseCase {
    constructor(
        @inject('UsersRepository') private usersRepository: IUsersRepository,
    ) { }
    async execute({ email }: ResendTokenEmailProps): Promise<void> {
        try {
            const user = await this.usersRepository.findByEmail(email)

            if (!user) {
                throw new AppError('User not found', 401)
            }
    
            if (user.isVerified) {
                throw new AppError('Email already verified', 401)
            }
            const hashVerificationToken = sign(
                { email: email },
                jwtConfig.emailToken.secret,
                { expiresIn: jwtConfig.emailToken.expiresIn }
            );
    
            await sendVerificationEmail({ email, token: hashVerificationToken, name: user.name })
    
            user.verificationToken = hashVerificationToken
    
            await this.usersRepository.update(user)
        }
        catch (error) {
            console.log(error)
            throw new AppError(error.message, 401)
        }
    }
}