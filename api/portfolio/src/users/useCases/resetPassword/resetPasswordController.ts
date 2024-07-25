import { container } from "tsyringe";
import { ResetPasswordUseCase } from "./resetPasswordUseCase";
import { Request, Response } from 'express'
import { instanceToInstance } from "class-transformer";
import { z } from "zod";

export class ResetPasswordController {
    async handle(req: Request, res: Response): Promise<Response> {
        const resetPasswordUseCase = container.resolve(ResetPasswordUseCase)

        const resetPasswordBody = z.object({
            password: z.string()
                .min(6, { message: 'Password is required' })
                .regex(
                    /^(?=.*[a-z])/,
                    "Password must contain at least one lowercase letter",
                )
                .regex(
                    /^(?=.*[A-Z])/,
                    "Password must contain at least one uppercase letter",
                )
                .regex(/^(?=.*[0-9])/, "Password must contain at least one number")
                .refine((value) => value.length >= 6, {
                    message: "Password must be at least 6 characters long",
                }),
            email: z.string({ required_error: 'Email is required' })
                .min(8, { message: 'This field has to be filled' })
                .email('This is not a valid email'),
        })

        const { email, password } = resetPasswordBody.parse(
            req.body,
        )
        await resetPasswordUseCase.execute({ password, email }).then((user) => {
            instanceToInstance(user)
        })

        return res.status(204).send();
    }
}