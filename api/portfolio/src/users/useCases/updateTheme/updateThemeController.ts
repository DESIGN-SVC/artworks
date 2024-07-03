import { container } from "tsyringe";
import { UpdateThemeUseCase } from "./updateThemeUseCase";
import { Request, Response } from 'express'
import { instanceToInstance } from "class-transformer";
import { decode } from 'jsonwebtoken'
import { z } from "zod";

export class UpdateThemeController {
    async handle(req: Request, res: Response): Promise<Response> {
        const updateThemeUseCaseUseCase = container.resolve(UpdateThemeUseCase)
        
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

        const updateThemeUserBody = z.object({
            theme:
                z.enum(['light', 'dark'])
        })

        const { theme } = updateThemeUserBody.parse(
            req.body,
        )
         await updateThemeUseCaseUseCase.execute({ user_id: id as string, theme })

        return res.status(201).json(instanceToInstance({ theme }))
    }
}