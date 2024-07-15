import { container } from "tsyringe";
import { UpdatePasswordUseCase } from "./updatePasswordUseCase";
import { Request, Response } from 'express'
import { instanceToInstance } from "class-transformer";
import { decode } from 'jsonwebtoken'
import { z } from "zod";

export class UpdatePasswordController {
    async handle(req: Request, res: Response): Promise<Response> {
        const updatePasswordUseCase = container.resolve(UpdatePasswordUseCase)

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

        const updatePasswordBody = z.object({
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
            oldPassword: z
                .string()
                .min(6, { message: 'Old password is required' })
                .optional(),
        })

        const { oldPassword, password } = updatePasswordBody.parse(
            req.body,
        )
        const user = await updatePasswordUseCase.execute({ user_id: id as string, password, oldPassword })

        return res.json(instanceToInstance(user))
    }
}