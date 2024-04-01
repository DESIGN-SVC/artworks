import { RolesRepository } from '@roles/repositories/rolesRepository'
import { IRolesRepository } from '@roles/repositories/rolesRepository.type'
import { CreateRoleController, DeleteRoleController } from '@roles/useCase'

import { container } from 'tsyringe'

container.registerSingleton<IRolesRepository>(
  'RolesRepository',
  RolesRepository,
)
container.registerSingleton('CreateRoleController', CreateRoleController)
container.registerSingleton('DeleteRoleController', DeleteRoleController)
