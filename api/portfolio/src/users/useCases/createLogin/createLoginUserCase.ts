import { inject, injectable } from "tsyringe";
import { compare } from "bcryptjs";
import { AppError } from "@shared/errors/appError";
import { User } from "@users/entities/user";
import { IUsersRepository } from "@users/repositories/usersRepository.type";
import { sign } from "jsonwebtoken";
import jwtConfig from '@config/auth'


type CreateLoginDTO = {
    email: string
    password: string
}

type IResponse = {
    user: User
    accessToken: string
    /* refreshToken: string */
}
@injectable()
export class CreateLoginUserCase {

    constructor(
        @inject('UsersRepository') private usersRepository: IUsersRepository,
      ) {}
    async execute({ email, password }: CreateLoginDTO): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(email)

        if (!user) {
            throw new AppError('Email or password incorrect', 401)
        }
        
        const passwordMatch = await compare(password, user.password)
        if (!passwordMatch) {
            throw new AppError('Email or password incorrect', 401)
        }
        console.log(user)

        const accessToken = sign({}, jwtConfig.jwt.secret, {
            subject: user.id,
            expiresIn: jwtConfig.jwt.expiresIn,              
        })

        /* const expires = new Date(Date.now()+ jwtConfig.refreshToken.duration)

        const refreshToken = sign({}, jwtConfig.refreshToken.secret,{
            subject: user.id,
            expiresIn: jwtConfig.refreshToken.expiresIn
        }) */

        return {
            user,
            accessToken,

        }
    }
}