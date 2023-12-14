import { createRolesController } from "@roles/useCases/createRole";
import { listRolesController } from "@roles/useCases/listRoles";
import { Router } from "express";

const rolesRoutes = Router()

rolesRoutes.post('/', (req, res) => {
  return createRolesController.handle(req, res)
})

rolesRoutes.get('/', (req, res) => {
  return listRolesController.handle(req, res)
})

export { rolesRoutes }
