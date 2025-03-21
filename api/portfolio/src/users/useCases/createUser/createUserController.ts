import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";
import { container } from "tsyringe";
import { z } from "zod";
import { instanceToInstance } from "class-transformer";

export class CreateUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const createUserUseCase = container.resolve(CreateUserUseCase)

        const createUserBody = z.object({
            name: z.string().min(6, { message: 'Name is required' }),
            email: z.string()
                .min(8, { message: 'This field has to be filled' })
                .email('This is not a valid email')
                .refine(
                    (value) => {
                        const validDomains = ['webhelp', 'concentrix', 'hotmail', 'gmail']
                        const domain = value.split('@').at(1)
                        const dotIndex = domain.indexOf('.')

                        const partialDomain = domain.substring(0, dotIndex)
                        return validDomains.includes(partialDomain)

                    },
                    { message: "Email invalid" }
                ),
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
            team: z.string().min(6, { message: 'Team is required' }),
            theme: z.enum(['light', 'dark']).default('light'),
            isAdmin: z.boolean().default(false),
            isVerified: z.boolean().default(false),
        })

        const {
            name,
            email,
            isAdmin,
            password,
            team,
            theme,
            isVerified
        } = createUserBody.parse(req.body)
        
        await createUserUseCase.execute({
            name,
            email,
            isAdmin,
            password,
            team,
            theme,
            isVerified
        }).then(instanceToInstance)


        return res.status(201).send({ message: 'User registered. Please verify your email.' })
    }
}