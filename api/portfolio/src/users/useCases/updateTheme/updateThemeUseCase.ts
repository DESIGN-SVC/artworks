import { AppError } from "@shared/errors/appError";
import { User } from "@users/entities/user";
import { IUsersRepository } from "@users/repositories/usersRepository.type";
import { inject, injectable } from "tsyringe";

interface UpdateThemeProps {
    theme: 'light' | 'dark'
    user_id: string
}
@injectable()
export class UpdateThemeUseCase {
    constructor(@inject('UsersRepository') private usersRepository: IUsersRepository) { }

    async execute({ theme, user_id }: UpdateThemeProps): Promise<Pick<User, 'theme'>> {
        const user = await this.usersRepository.findById(user_id)

        if (!user) {
            throw new AppError('User not found')
        }

        if (theme !== 'light' && theme !== 'dark') {
            throw new AppError('Invalid theme')
        }

        user.theme = theme
        this.usersRepository.update(user)
        return { theme: user.theme }
    }
}