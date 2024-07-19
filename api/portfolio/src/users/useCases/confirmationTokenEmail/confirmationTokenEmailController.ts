import { Request, Response } from 'express'
import { ConfirmationTokenEmailUseCase } from './confirmationTokenEmailUseCase'
import { z } from 'zod'
import { container } from 'tsyringe'
import { instanceToInstance } from 'class-transformer'

export class ConfirmationTokenEmailController {
    async handle(req: Request, res: Response): Promise<Response> {
        const confirmationTokenEmailUseCase = container.resolve(ConfirmationTokenEmailUseCase)

        const confirmationTokenEmail = z.object({
            token: z.string().min(6, { message: 'Token is required' }),
        })
  
        const { token } = confirmationTokenEmail.parse(req.query)

        const user = await confirmationTokenEmailUseCase.execute({ token })

        return res.status(200).json(instanceToInstance({ user }))
    }
}