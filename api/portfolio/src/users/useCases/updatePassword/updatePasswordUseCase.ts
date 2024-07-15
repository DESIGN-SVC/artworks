import { decryptPassword } from 'src/utils/decryptPassword';
import { AppError } from "@shared/errors/appError";
import { User } from "@users/entities/user";
import { IUsersRepository } from "@users/repositories/usersRepository.type";
import { compare, hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

interface UpdatePasswordProps {
    user_id: string
    password?: string
    oldPassword?: string
}
@injectable()
export class UpdatePasswordUseCase {
    constructor(@inject('UsersRepository') private usersRepository: IUsersRepository) { }

    async execute({ password, oldPassword, user_id }: UpdatePasswordProps): Promise<User> {
        const user = await this.usersRepository.findById(user_id)

        if (!user) {
            throw new AppError('User not found')
        }

        if (password && oldPassword) {
            const passwordMatch = await compare(decryptPassword(oldPassword), user.password)

            if (!passwordMatch) throw new AppError('Old password does not match')

            user.password = await hash(decryptPassword(password), 10)
        }

        this.usersRepository.update(user)

        return 
    }
}