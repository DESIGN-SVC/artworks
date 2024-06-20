import { container } from "tsyringe";
import { ShowProfileUseCase } from "./showProfileUseCase";
import { Request, Response } from 'express'
import { instanceToInstance } from "class-transformer";
import { decode } from 'jsonwebtoken'

export class ShowProfileController {
    async handle(req: Request, res: Response): Promise<Response> {
        const showProfileUseCase = container.resolve(ShowProfileUseCase)
        const { sub } = decode(req.header('authorization'))
        
        const user = await showProfileUseCase.execute({ user_id: sub as string})

        return res.status(201).json(instanceToInstance({ user }))
    }
}