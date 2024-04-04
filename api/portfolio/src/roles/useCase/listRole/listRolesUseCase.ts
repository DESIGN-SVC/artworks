import {
  IRolesRepository,
  RolesPaginateProperties,
} from '@roles/repositories/rolesRepository.type'

import { injectable, inject } from 'tsyringe'

type ListRolesUseCaseParams = {
  page: number
  limit: number
}

@injectable()
export class ListRolesUseCase {
  constructor(
    @inject('RolesRepository')
    private rolesRepository: IRolesRepository,
  ) {}
  async execute({
    limit: take,
    page,
  }: ListRolesUseCaseParams): Promise<RolesPaginateProperties> {
    const skip = (Number(page) - 1) * take
    return this.rolesRepository.findAll({ page, skip, take })
  }
}
