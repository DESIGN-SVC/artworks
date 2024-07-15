
import { IUsersRepository } from '@users/repositories/usersRepository.type';
import 'dotenv/config'
import { verify, TokenExpiredError } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import jwtConfig from '@config/auth'
import { AppError } from '@shared/errors/appError';
import { User } from '@users/entities/user';


interface ConfirmationTokenEmailProps {
    token: string,
}

interface IResponse {
    message: string
}
@injectable()
export class ConfirmationTokenEmailUseCase {
    constructor(
        @inject('UsersRepository') private usersRepository: IUsersRepository,
    ) { }
    async execute({ token }: ConfirmationTokenEmailProps): Promise<User> {
        try {
            const decoded = verify(token, jwtConfig.emailToken.secret) as { email: string, exp: number };
            const user = await this.usersRepository.findByEmail(decoded.email)

            if (!token) {
                throw new AppError('Token not found', 401)
            }
            if (!user) {
                throw new AppError('User not found')
            }
            if (user.isVerified === true) {
                throw new AppError('User already verified', 401)
            }
            if (!decoded) {
                throw new AppError('Invalid token', 401)
            }
            const currentTime = Math.floor(Date.now() / 1000);
            if (decoded.exp < currentTime) {
                throw new AppError('Token expired', 401)
            }

            user.isVerified = true
            user.verificationToken = null

            await this.usersRepository.update(user)

            return user
        }
        catch (error) {
            if(error instanceof AppError){
                throw error
            }
            if (error instanceof TokenExpiredError) {
                throw new AppError('Token expired', 401)
            }
        }
        

    }
}