import { Router } from "express";
import uploadConfig from '@config/upload'
import multer from "multer";
import { container } from "tsyringe";

import {
    CreateLoginController,
    CreateUserController,
    ShowProfileController,
    UpdateUserController,
    UpdateThemeController,
    UpdatePasswordController,
    UpdateAvatarController,
    DeleteAvatarController,
    ConfirmationTokenEmailController,
    ResendTokenEmailController,
    ResetPasswordController
} from "@users/useCases";

export const usersRouter = Router()

const upload = multer(uploadConfig)

const createUserController = container.resolve(CreateUserController)
const createLoginController = container.resolve(CreateLoginController)
const showProfileController = container.resolve(ShowProfileController)
const updateThemeController = container.resolve(UpdateThemeController)
const updateUserController = container.resolve(UpdateUserController)
const updatePasswordController = container.resolve(UpdatePasswordController)
const updateAvatarController = container.resolve(UpdateAvatarController)
const deleteAvatarController = container.resolve(DeleteAvatarController)
const confirmationTokenEmailController = container.resolve(ConfirmationTokenEmailController)
const resendTokenEmailController = container.resolve(ResendTokenEmailController)
const resetPasswordController = container.resolve(ResetPasswordController)

usersRouter.post('/', (req, res) => {
    return createUserController.handle(req, res)
})
usersRouter.post('/login', (req, res) => {
    return createLoginController.handle(req, res)
})
usersRouter.post('/resend-token', (req, res) => {
    return resendTokenEmailController.handle(req, res)
})
usersRouter.post('/reset-password', (req, res) => {
    return resetPasswordController.handle(req, res)
})


usersRouter.get('/profile', (req, res) => {
    return showProfileController.handle(req, res)
})
usersRouter.get('/confirmation-token', (req, res) => {
    return confirmationTokenEmailController.handle(req, res)
})

usersRouter.patch('/theme', (req, res) => {
    return updateThemeController.handle(req, res)
})
usersRouter.patch('/profile', (req, res) => {
    return updateUserController.handle(req, res)
})
usersRouter.patch('/password', (req, res) => {
    return updatePasswordController.handle(req, res)
})
usersRouter.patch(
    '/avatar',
    upload.single('avatar'),
    (req, res) => {
        return updateAvatarController.handle(req, res)
    },
)

usersRouter.delete(
    '/avatar',
    (req, res) => {
        return deleteAvatarController.handle(req, res)
    },
)