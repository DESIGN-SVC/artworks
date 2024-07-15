import { UsersRepository } from '@users/repositories/usersRepository'
import { IUsersRepository } from '@users/repositories/usersRepository.type'
import {
    CreateUserController,
    CreateLoginController,
    ShowProfileController,
    UpdatePasswordController,
    UpdateUserController,
    UpdateThemeController,
    UpdateAvatarController,
    DeleteAvatarController,
    ConfirmationTokenEmailController,
    ResendTokenEmailController,
} from '@users/useCases'
import { container } from 'tsyringe'


container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository,
)

container.registerSingleton('CreateUserController', CreateUserController)
container.registerSingleton('CreateLoginController', CreateLoginController)
container.registerSingleton('ShowProfileController', ShowProfileController)
container.registerSingleton('UpdateThemeController', UpdateThemeController)
container.registerSingleton('UpdateUserController', UpdateUserController)
container.registerSingleton('UpdatePasswordController', UpdatePasswordController)
container.registerSingleton('UpdateAvatarController', UpdateAvatarController)
container.registerSingleton('DeleteAvatarController', DeleteAvatarController)
container.registerSingleton('ConfirmationTokenEmailController', ConfirmationTokenEmailController)
container.registerSingleton('ResendTokenEmailController', ResendTokenEmailController)
