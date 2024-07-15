import path from 'node:path'
import fs from 'node:fs'
import { injectable, inject } from 'tsyringe'
import { User } from '@users/entities/user'

import { AppError } from '@shared/errors/appError'
import uploadConfig from '@config/upload'
import { IUsersRepository } from '@users/repositories/usersRepository.type'

type UpdateAvatarDTO = {
  userId: string
  avatarFilename: string
}
@injectable()
export class UpdateAvatarUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
  ) {}

  async execute({ avatarFilename, userId }: UpdateAvatarDTO): Promise<User> {
    const user = await this.usersRepository.findById(userId)
    if (!user) {
      throw new AppError('Only authenticated users can change avatar', 401)
    }
    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar)

      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath)
      console.log('userAvatarFileExists',userAvatarFileExists);
      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath)
      }
    }

    user.avatar = avatarFilename.replace(/\s/g, '')
    return this.usersRepository.update(user)
  }
}