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
    roleId: string
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
        roleId,
    }: CreateUserDTO): Promise<User> {
        const emailAlreadyExists = await this.usersRepository.findByEmail(email)

        if (emailAlreadyExists) {
            throw new AppError('Email already exists')
        }

        const role = await this.rolesRepository.findById(roleId)
        if (!role) {
            throw new AppError('Role not found', 404)
        }

        const hashedPassword = await hash(password, 10)

        return this.usersRepository.create({
            name,
            email,
            password: hashedPassword,
            isAdmin,
            role,
        })
    }
}
