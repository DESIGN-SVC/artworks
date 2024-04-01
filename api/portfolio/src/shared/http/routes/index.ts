import { rolesRoutes } from '@roles/http/routes/roles.routes'
import { Router } from 'express'

export const routes = Router()
routes.use('/roles', rolesRoutes)
