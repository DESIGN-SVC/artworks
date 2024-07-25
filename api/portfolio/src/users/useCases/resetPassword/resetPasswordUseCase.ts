import { decryptPassword } from 'src/utils/decryptPassword';
import { AppError } from "@shared/errors/appError";
import { User } from "@users/entities/user";
import { IUsersRepository } from "@users/repositories/usersRepository.type";
import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

interface ResetPasswordProps {
    email: string
    password?: string
}
@injectable()
export class ResetPasswordUseCase {
    constructor(@inject('UsersRepository') private usersRepository: IUsersRepository) { }

    async execute({ password, email }: ResetPasswordProps): Promise<User> {
        const user = await this.usersRepository.findByEmail(email)

        if (!user) {
            throw new AppError('User not found')
        }

        if (!user.isVerified) {
            throw new AppError('Email not verified', 401)
        }

        if (!password) {
            throw new AppError('Password is required')
        }

        if (password) {
            user.password = await hash(decryptPassword(password), 10)
        }

        return this.usersRepository.update(user)
    }
}