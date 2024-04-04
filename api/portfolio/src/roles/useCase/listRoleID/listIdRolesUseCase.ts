import { Role } from '@roles/entities/roles'
import { IRolesRepository } from '@roles/repositories/rolesRepository.type'
import { AppError } from '@shared/errors/appError'

import { injectable, inject } from 'tsyringe'

type ListIdRolesUseCaseParams = {
  id: string
}

@injectable()
export class ListIdRolesUseCase {
  constructor(
    @inject('RolesRepository')
    private rolesRepository: IRolesRepository,
  ) {}
  async execute({ id }: ListIdRolesUseCaseParams): Promise<Role> {
    const role = await this.rolesRepository.findById(id)
    if (!role) throw new AppError('Role not found', 404)

    return role
  }
}
