import { UsersRepository } from '@users/repositories/usersRepository'
import { IUsersRepository } from '@users/repositories/usersRepository.type'
import { CreateUserController } from '@users/useCases'
import { container } from 'tsyringe'


container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository,
)

container.registerSingleton('CreateUserController', CreateUserController)