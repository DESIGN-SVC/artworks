import { UpdateAvatarUseCase } from './updateAvatarUseCase'
import { Response, Request } from 'express'
import { container } from 'tsyringe'
import { instanceToInstance } from 'class-transformer'
import { decode } from 'jsonwebtoken'

export class UpdateAvatarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const updateAvatarUseCase = container.resolve(UpdateAvatarUseCase)

    let id: string | (() => string) = ''
    if (!req.header('authorization')) {
      return res.status(401).json({
        message: 'Access token not present',
        error: true,
        code: 'token.invalid',
      })
    } else {
      const { sub } = decode(req.header('authorization'))
      id = sub
    }

    const user = await updateAvatarUseCase.execute({
      userId: id as string,
      avatarFilename: req.file?.filename,
    })

    return res.json(instanceToInstance(user))
  }
}
