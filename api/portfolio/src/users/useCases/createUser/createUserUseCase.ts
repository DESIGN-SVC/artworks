import { decryptPassword } from 'src/utils/decryptPassword';
import { injectable, inject } from 'tsyringe'
import { hash } from 'bcryptjs'
import { AppError } from '@shared/errors/appError'
import { User } from '@users/entities/user'
import { IUsersRepository } from '@users/repositories/usersRepository.type'
import { IRolesRepository } from '@roles/repositories/rolesRepository.type'

import { sendVerificationEmail } from 'src/utils/sendVerificationEmail';
import { sign } from "jsonwebtoken";
import jwtConfig from '@config/auth'



type CreateUserDTO = {
    name: string
    email: string
    password: string
    isAdmin: boolean
    team: string
    theme: 'light' | 'dark'
    isVerified: boolean

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
        theme,
        isVerified
    }: CreateUserDTO): Promise<User> {
        const emailAlreadyExists = await this.usersRepository.findByEmail(email)
        const roleName = await this.rolesRepository.findByName('user')

        if (emailAlreadyExists) {
            throw new AppError('Email already exists')
        }

        if (!roleName) {
            throw new AppError('Role not found')
        }
    
        const hashedPassword = await hash(decryptPassword(password), 10)
        const hashVerificationToken = sign(
            { email: email },
            jwtConfig.emailToken.secret,
            { expiresIn: jwtConfig.emailToken.expiresIn }
        );

        await sendVerificationEmail({ email, token: hashVerificationToken, name })

        return this.usersRepository.create({
            name,
            email,
            password: hashedPassword,
            isAdmin,
            role: roleName,
            team,
            theme,
            verificationToken: hashVerificationToken,
            isVerified
        })
    }
}
