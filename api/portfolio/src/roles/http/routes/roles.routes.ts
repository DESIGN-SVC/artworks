import { CreateRoleController, DeleteRoleController } from '@roles/useCase'
import { IsAuthenticated } from '@shared/http/middlewares/isAuthenticated'
import { Router } from 'express'
import { container } from 'tsyringe'
export const rolesRoutes = Router()

const createRoleController = container.resolve(CreateRoleController)
const deleteRoleController = container.resolve(DeleteRoleController)

rolesRoutes.post('/', (req, res) => {
  return createRoleController.handle(req, res)
})
rolesRoutes.delete('/', IsAuthenticated, (req, res) => {
  return deleteRoleController.handle(req, res)
})
