import { Request, Response } from 'express'
import { ConfirmationTokenPasswordUseCase } from './confirmationTokenPasswordUseCase'
import { z } from 'zod'
import { container } from 'tsyringe'
import { instanceToInstance } from 'class-transformer'

export class ConfirmationTokenPasswordController {
    async handle(req: Request, res: Response): Promise<Response> {
        const confirmationTokenPasswordUseCase = container.resolve(ConfirmationTokenPasswordUseCase)

        const confirmationTokenPassword = z.object({
            token: z.string().min(6, { message: 'Token is required' }),
        })
  
        const { token } = confirmationTokenPassword.parse(req.query)

        const user = await confirmationTokenPasswordUseCase.execute({ token })

        return res.status(200).json(instanceToInstance({ user }))
    }
}
