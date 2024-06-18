import { CreateLoginController, CreateUserController } from "@users/useCases";
import { Router } from "express";
import { container } from "tsyringe";

export const usersRouter = Router()

const createUserController = container.resolve(CreateUserController)
const createLoginController = container.resolve(CreateLoginController)


usersRouter.post('/', (req, res) => {
    return createUserController.handle(req, res)
})
usersRouter.post('/login', (req, res) => {
    return createLoginController.handle(req, res)
})
