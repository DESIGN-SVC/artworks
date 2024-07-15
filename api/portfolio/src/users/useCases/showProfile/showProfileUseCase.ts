import { AppError } from "@shared/errors/appError";
import { User } from "@users/entities/user";
import { IUsersRepository } from "@users/repositories/usersRepository.type";
import { inject, injectable } from "tsyringe";

interface ShowProfileProps {
    user_id: string
}
@injectable()
export class ShowProfileUseCase {
    constructor(@inject('UsersRepository') private usersRepository: IUsersRepository) { }

    async execute({ user_id }: ShowProfileProps): Promise<User> {
        const user = await this.usersRepository.findById(user_id)
        
        if (!user) {
            throw new AppError('User not found')
        }

        return user
    }
}