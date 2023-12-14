import { RolesRepository } from "@roles/repositories/roles.repository";
import { ListRoleUseCase } from "./listRolesUseCase";
import { ListRolesController } from "./listRolesController";

const rolesRepository = RolesRepository.getInstance()
const listRoleUseCase = new ListRoleUseCase(rolesRepository)
export const listRolesController = new ListRolesController(listRoleUseCase)
