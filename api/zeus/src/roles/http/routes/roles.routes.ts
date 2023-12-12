import { RolesRepository } from './../../repositories/roles.repository';
import { Router } from "express";

const rolesRoutes = Router()
const rolesRepository = new RolesRepository()

rolesRoutes.post('/', (req, res) => {
  const { name } = req.body
  const role = rolesRepository.create({ name })

  return res.status(201).json(role)
})

rolesRoutes.get('/', (req, res) => {

  const roles = rolesRepository.findAll()

  return res.status(200).json(roles)
})

export { rolesRoutes }
