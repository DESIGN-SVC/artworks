import { rolesRoutes } from '@roles/http/routes/roles.routes'
import { usersRouter } from '@users/http/routes/user.routes'
import { Router } from 'express'

export const routes = Router()
routes.use('/roles', rolesRoutes)
routes.use('/users', usersRouter)