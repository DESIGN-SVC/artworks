import { Role } from "@roles/entities/roles"

type CreateRoleDTO = {
  name: string
}


export class RolesRepository {
  private roles: Role[]

  constructor() {
    this.roles = []
  }
  create({ name }: CreateRoleDTO) {
    const role = new Role()

    Object.assign(role, {
      name,
      created_at: new Date().toISOString()
    })

    this.roles.push(role)
    return role
  }

  findAll(): Role[] {
    return this.roles
  }
}
