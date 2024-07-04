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
    UpdateAvatarController
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

usersRouter.post('/', (req, res) => {
    return createUserController.handle(req, res)
})
usersRouter.post('/login', (req, res) => {
    return createLoginController.handle(req, res)
})
usersRouter.get('/profile', (req, res) => {
    return showProfileController.handle(req, res)
})
usersRouter.put('/theme', (req, res) => {
    return updateThemeController.handle(req, res)
})
usersRouter.put('/profile', (req, res) => {
    return updateUserController.handle(req, res)
})
usersRouter.put('/password', (req, res) => {
    return updatePasswordController.handle(req, res)
})
usersRouter.patch(
    '/avatar',
    upload.single('avatar'),
    (req, res) => {
      return updateAvatarController.handle(req, res)
    },
  )