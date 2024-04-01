import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { CreateRoleUseCase } from './createRoleUseCase'
import { z } from 'zod'

export class CreateRoleController {
  async handle(req: Request, res: Response): Promise<Response> {
    const createRoleUseCase = container.resolve(CreateRoleUseCase)
    const createRoleBody = z.object({
      name: z.string().min(1, { message: 'Name is required' }),
    })
    const { name } = createRoleBody.parse(req.body)

    const role = await createRoleUseCase.execute({ name })

    return res.status(201).json(role)
  }
}
