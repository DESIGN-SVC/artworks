import {
  CreateRoleController,
  DeleteRoleController,
  ListIdRolesController,
  ListRolesController,
  UpdateRolesController,
} from '@roles/useCase'
import { IsAuthenticated } from '@shared/http/middlewares/isAuthenticated'
import { Router } from 'express'
import { container } from 'tsyringe'
export const rolesRoutes = Router()

const createRoleController = container.resolve(CreateRoleController)
const deleteRoleController = container.resolve(DeleteRoleController)
const listRoleController = container.resolve(ListRolesController)
const listIdRoleController = container.resolve(ListIdRolesController)
const updateRoleController = container.resolve(UpdateRolesController)

rolesRoutes.post('/', (req, res) => {
  return createRoleController.handle(req, res)
})

rolesRoutes.get('/', IsAuthenticated, (req, res) => {
  return listRoleController.handle(req, res)
})

rolesRoutes.get('/:id', IsAuthenticated, (req, res) => {
  return listIdRoleController.handle(req, res)
})

rolesRoutes.put('/:id', IsAuthenticated, (req, res) => {
  return updateRoleController.handle(req, res)
})

rolesRoutes.delete('/', IsAuthenticated, (req, res) => {
  return deleteRoleController.handle(req, res)
})
