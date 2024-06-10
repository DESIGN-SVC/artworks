import { Role } from '@roles/entities/roles'

import { dataSource } from '@shared/typeorm'
import { Repository } from 'typeorm'
import {
  CreateRoleDTO,
  IRolesRepository,
  PaginateParams,
  RolesPaginateProperties,
} from './rolesRepository.type'

export class RolesRepository implements IRolesRepository {
  private repository: Repository<Role>
  constructor() {
    this.repository = dataSource.getRepository(Role)
  }

  async create({ name }: CreateRoleDTO): Promise<Role> {
    const role = await this.repository.create({ name })
    return this.repository.save(role)
  }

  async update(role: Role): Promise<Role> {
    return this.repository.save(role)
  }

  async delete(role: Role): Promise<void> {
    await this.repository.remove(role)
  }
  async findAll({
    page,
    skip,
    take,
  }: PaginateParams): Promise<RolesPaginateProperties> {
    const [roles, total] = await this.repository
      .createQueryBuilder()
      .skip(skip)
      .take(take)
      .getManyAndCount()

    return {
      per_page: take,
      total,
      current_page: page,
      data: roles,
    }
  }
  async findByName(name: string): Promise<Role | null> {
    return this.repository.findOneBy({ name })
  }
  async findById(id: string): Promise<Role | null> {
    return this.repository.findOneBy({ id })
  }
}
