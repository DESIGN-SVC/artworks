import { AppError } from "@shared/errors/appError";
import { User } from "@users/entities/user";
import { IUsersRepository } from "@users/repositories/usersRepository.type";
import { inject, injectable } from "tsyringe";

interface UpdateUserProps {
    name: string
    user_id: string
    team: string
}
@injectable()
export class UpdateUserUseCase {
    constructor(@inject('UsersRepository') private usersRepository: IUsersRepository) { }

    async execute({ name, team, user_id }: UpdateUserProps): Promise<User> {
        const user = await this.usersRepository.findById(user_id)

        if (!user) {
            throw new AppError('User not found')
        }

        user.name = name
        user.team = team

        return this.usersRepository.update(user)
    }
}