import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteRoleUseCase } from './deleteRolesUseCase'
import { z } from 'zod'

export class DeleteRoleController {
  async handle(req: Request, res: Response): Promise<Response> {
    const deleteRoleUseCase = container.resolve(DeleteRoleUseCase)
    const deleteRoleParams = z.object({
      id: z.string().uuid({ message: 'Id is required' }),
    })
    const { id } = deleteRoleParams.parse(req.params)

    await deleteRoleUseCase.execute({ id })
    return res.status(204).send()
  }
}
