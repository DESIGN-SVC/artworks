import { Request, Response } from 'express'
import { CreateLoginUserCase } from './createLoginUserCase'
import { z } from 'zod'
import { instanceToInstance } from 'class-transformer';
import { container } from 'tsyringe'
export class CreateLoginController {
    async handle(req: Request, res: Response): Promise<Response> {
        const createLoginUseCase = container.resolve(CreateLoginUserCase)

        const createLoginBody = z.object({
            email: z.string({ required_error: 'Email is required' })
                .min(8, { message: 'This field has to be filled' })
                .email('This is not a valid email'),
            password: z.string({ required_error: 'Password is required' })
                .min(6, { message: 'Password is required' })
        })

        const { email, password } = createLoginBody.parse(req.body)
  
        const { accessToken, user } = await createLoginUseCase.execute({ email: email.toLowerCase(), password })
        return res.status(201).json(instanceToInstance({ user, accessToken }))        
    }
}