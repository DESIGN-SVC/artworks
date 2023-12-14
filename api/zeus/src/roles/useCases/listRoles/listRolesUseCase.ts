import { Role } from "@roles/entities/roles";
import { RolesRepository } from "@roles/repositories/roles.repository";

export class ListRoleUseCase {
  constructor( private rolesRepository: RolesRepository) { }

  execute(): Role[] {
    return this.rolesRepository.findAll()
  }
}


