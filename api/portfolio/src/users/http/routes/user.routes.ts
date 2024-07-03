import { CreateLoginController, CreateUserController, ShowProfileController,UpdateUserController, UpdateThemeController } from "@users/useCases";
import { Router } from "express";
import { container } from "tsyringe";

export const usersRouter = Router()

const createUserController = container.resolve(CreateUserController)
const createLoginController = container.resolve(CreateLoginController)
const showProfileController = container.resolve(ShowProfileController)
const updateThemeController = container.resolve(UpdateThemeController)
const updateUserController = container.resolve(UpdateUserController)

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