import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { ListRolesUseCase } from './listRolesUseCase'
import { z } from 'zod'
import { AppError } from '@shared/errors/appError'

export class ListRolesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listRolesUseCase = container.resolve(ListRolesUseCase)
    const listRoleParams = z.object({
      page: z.string().optional(),
      limit: z.string().optional(),
    })

    const { limit, page } = listRoleParams.parse(req.query)

    if (page && isNaN(page as any)) {
      throw new AppError('Page must be a number')
    }

    if (limit && isNaN(limit as any)) {
      throw new AppError('Page must be a number')
    }

    const result_page = page && Number(page) > 0 ? Number(page) : 1
    const result_limit = limit && Number(limit) > 0 ? Number(limit) : 15
    const roles = await listRolesUseCase.execute({
      limit: result_limit,
      page: result_page,
    })

    return res.json(roles)
  }
}
