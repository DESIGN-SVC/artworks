import { Router } from "express";
import { container } from "tsyringe";
import { CreateUserController } from "@users/useCases";

export const usersRouter = Router()

const createUserController = container.resolve(CreateUserController)

usersRouter.post('/', (req, res) => {
    return createUserController.handle(req, res)
})
