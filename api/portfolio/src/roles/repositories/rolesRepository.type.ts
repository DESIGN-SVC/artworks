import { Role } from '@roles/entities/roles'

export type CreateRoleDTO = {
  name: string
}
export type PaginateParams = {
  page: number
  skip: number
  take: number
}

export type RolesPaginateProperties = {
  per_page: number
  total: number
  current_page: number
  data: Role[]
}

export interface IRolesRepository {
  create({ name }: CreateRoleDTO): Promise<Role>
  update(role: Role): Promise<Role>
  delete(role: Role): Promise<void>
  findAll({
    page,
    skip,
    take,
  }: PaginateParams): Promise<RolesPaginateProperties>
  findByName(name: string): Promise<Role | null>
  findById(id: string): Promise<Role | null>
}
