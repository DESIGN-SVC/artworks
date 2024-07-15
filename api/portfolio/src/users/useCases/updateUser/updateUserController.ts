import { container } from "tsyringe";
import { UpdateUserUseCase } from "./updateUserUseCase";
import { Request, Response } from 'express'
import { instanceToInstance } from "class-transformer";
import { decode } from 'jsonwebtoken'
import { z } from "zod";

export class UpdateUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const updateUserUseCase = container.resolve(UpdateUserUseCase)

        let id: string | (() => string) = ''
        if (!req.header('authorization')) {
            return res.status(401).json({
                message: 'Access token not present',
                error: true,
                code: 'token.invalid',
            })
        } else {
            const { sub } = decode(req.header('authorization'))
            id = sub
        }

        const updateUserUserBody = z.object({
            team: z.string().min(6, { message: 'Team is required' }),
            name: z.string().min(6, { message: 'Name is required' }),
        })

        const { name, team } = updateUserUserBody.parse(
            req.body,
        )
        const user = await updateUserUseCase.execute({ user_id: id as string, name, team })

        return res.json(instanceToInstance(user))
    }
}