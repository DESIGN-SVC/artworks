import { Role } from '@roles/entities/roles'
import { IRolesRepository } from '@roles/repositories/rolesRepository.type'
import { AppError } from '@shared/errors/appError'

import { injectable, inject } from 'tsyringe'

type UpdateRoleDTO = {
  id: string
  name: string
}

@injectable()
export class UpdateRolesUseCase {
  constructor(
    @inject('RolesRepository')
    private rolesRepository: IRolesRepository,
  ) {}
  async execute({ id, name }: UpdateRoleDTO): Promise<Role> {
    const role = await this.rolesRepository.findById(id)
    if (!role) throw new AppError('Role not found', 404)

    const roleAlreadyExists = await this.rolesRepository.findByName(name)

    if (roleAlreadyExists && roleAlreadyExists.id !== role.id)
      throw new AppError('Role  already exists', 404)

    role.name = name

    return this.rolesRepository.update(role)
  }
}
