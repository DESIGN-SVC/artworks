import { Role } from "@roles/entities/roles"
import { RolesRepository } from "@roles/repositories/roles.repository"
import { AppError } from "@shared/erros/appError"

type CreateRoleDTO = {
  name: string
}

export class CreateRoleUseCase {
  constructor(private rolesRepository: RolesRepository) { }
  execute({ name }: CreateRoleDTO): Role {
    const roleAlreadyExists = this.rolesRepository.findByName(name)

    if (roleAlreadyExists) {
      throw new AppError('Role already exists')
    }
    return this.rolesRepository.create({ name })
  }
}
