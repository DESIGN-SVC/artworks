import { Request, Response } from "express";
import { ListRoleUseCase } from "./listRolesUseCase";


export class ListRolesController {
  constructor(private listRoleUseCase: ListRoleUseCase) {}

  handle(req: Request, res: Response): Response {
    const roles = this.listRoleUseCase.execute();
    return res.status(200).json(roles);
  }
}
