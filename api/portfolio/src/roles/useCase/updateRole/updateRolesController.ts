import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { z } from 'zod'
import { UpdateRolesUseCase } from './updateRolesUseCase'

export class UpdateRolesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const updateRoleCase = container.resolve(UpdateRolesUseCase)

    const updateRoleBody = z.object({
      name: z.string().min(2, { message: 'Name is required' }),
    })
    const updaterRoleParams = z.object({
      id: z.string().uuid({ message: 'Id is required' }),
    })

    const { name } = updateRoleBody.parse(req.body)
    const { id } = updaterRoleParams.parse(req.params)

    const role = await updateRoleCase.execute({ id, name })

    return res.json(role)
  }
}
