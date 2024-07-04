import { decryptPassword } from 'src/utils/decryptPassword';
import { injectable, inject } from 'tsyringe'
import { hash } from 'bcryptjs'
import { AppError } from '@shared/errors/appError'
import { User } from '@users/entities/user'
import { IUsersRepository } from '@users/repositories/usersRepository.type'
import { IRolesRepository } from '@roles/repositories/rolesRepository.type'


type CreateUserDTO = {
    name: string
    email: string
    password: string
    isAdmin: boolean
    team: string
    theme: 'light' | 'dark'
}

@injectable()
export class CreateUserUseCase {
    constructor(
        @inject('UsersRepository') private usersRepository: IUsersRepository,
        @inject('RolesRepository') private rolesRepository: IRolesRepository,
    ) { }

    async execute({
        name,
        email,
        password,
        isAdmin,
        team,
        theme
    }: CreateUserDTO): Promise<User> {
        const emailAlreadyExists = await this.usersRepository.findByEmail(email)
        const roleName = await this.rolesRepository.findByName('user')

        if (emailAlreadyExists) {
            throw new AppError('Email already exists')
        }

        if(!roleName) {
            throw new AppError('Role not found')
        }

        const hashedPassword = await hash(decryptPassword(password), 10)

        return this.usersRepository.create({
            name,
            email,
            password: hashedPassword,
            isAdmin,
            role: roleName,
            team,
            theme
        })
    }
}
