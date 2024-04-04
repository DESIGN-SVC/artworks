import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { z } from 'zod'
import { ListIdRolesUseCase } from './listIdRolesUseCase'

export class ListIdRolesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listIdRoleUseCase = container.resolve(ListIdRolesUseCase)
    const listIdRoleParams = z.object({
      id: z.string().uuid({ message: 'Id is required' }),
    })

    const { id } = listIdRoleParams.parse(req.params)

    const role = await listIdRoleUseCase.execute({ id })

    return res.json(role)
  }
}
