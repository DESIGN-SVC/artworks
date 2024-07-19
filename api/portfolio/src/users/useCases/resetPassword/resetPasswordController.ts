import { Request, Response } from 'express'
import { ResetPasswordUseCase } from './resetPasswordUseCase '
import { z } from 'zod'

import { container } from 'tsyringe'
export class ResetPasswordController {
    async handle(req: Request, res: Response): Promise<Response> {
        const resetPasswordUseCase = container.resolve(ResetPasswordUseCase)

        const resetPasswordBody = z.object({
            email: z.string({ required_error: 'Email is required' })
                .min(8, { message: 'This field has to be filled' })
                .email('This is not a valid email'),
        })

        const { email } = resetPasswordBody.parse(req.body)

        try {
            await resetPasswordUseCase.execute({ email });
            return res.status(200).json({ message: 'Email verification link sent successfully.' });
          } catch (error) {
            console.error('Error in ResendTokenEmailController:', error);
            return res.status(400).json({ message: 'Error sending verification email.', error: error.message });
          }
    }
}