import path from 'node:path'
import fs from 'node:fs'
import { injectable, inject } from 'tsyringe'
import { User } from '@users/entities/user'

import { AppError } from '@shared/errors/appError'
import uploadConfig from '@config/upload'
import { IUsersRepository } from '@users/repositories/usersRepository.type'

type DeleteAvatarDTO = {
  userId: string
}
@injectable()
export class DeleteAvatarUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
  ) {}

  async execute({ userId }: DeleteAvatarDTO): Promise<void> {
    const user = await this.usersRepository.findById(userId)
    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);
      
      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
      user.avatar = null;
      this.usersRepository.update(user)
    }
  }
}