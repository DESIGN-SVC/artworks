
import { IUsersRepository } from '@users/repositories/usersRepository.type';
import 'dotenv/config'
import { verify, TokenExpiredError, JsonWebTokenError } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import jwtConfig from '@config/auth'
import { AppError } from '@shared/errors/appError';
import { User } from '@users/entities/user';


interface ConfirmationTokenPasswordProps {
    token: string,
}

@injectable()
export class ConfirmationTokenPasswordUseCase {
    constructor(
        @inject('UsersRepository') private usersRepository: IUsersRepository,
    ) { }
    async execute({ token }: ConfirmationTokenPasswordProps): Promise<User> {
        try {
            const decoded = verify(token, jwtConfig.passwordToken.secret) as { email: string, exp: number };
            const user = await this.usersRepository.findByEmail(decoded.email)

            if (!token) {
                throw new AppError('Token not found', 401)
            }
            if(!user.resetPasswordToken){
                throw new AppError('Invalid token', 401)
            }

            if (!user) {
                throw new AppError('User not found')
            }
            
            if (!decoded) {
                throw new AppError('Invalid token', 401)
            }

            const currentTime = Math.floor(Date.now() / 1000);
            if (decoded.exp < currentTime) {
                throw new AppError('Token expired', 401)
            }

            user.resetPasswordToken = null

            await this.usersRepository.update(user)

            return user
        }
        catch (error) {
            if(error instanceof JsonWebTokenError){
                console.log(error)
                throw new AppError('Invalid token', 401)
            }
            if(error instanceof AppError){
                throw error
            }
            if (error instanceof TokenExpiredError) {
                throw new AppError('Token expired', 401)
            }
        }
        

    }
}