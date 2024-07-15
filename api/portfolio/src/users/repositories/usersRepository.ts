import { User } from '@users/entities/user'
import {
  CreateUserDTO,
  IUsersRepository,
  PaginateParams,
  UsersPaginateProperties,
} from './usersRepository.type'
import { Repository } from 'typeorm'
import { dataSource } from '@shared/typeorm'

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = dataSource.getRepository(User)
  }
  async create(props: CreateUserDTO): Promise<User> {
    const user = this.repository.create(props)

    return this.repository.save(user)
  }
  async update(user: User): Promise<User> {
    return this.repository.save(user)
  }
  async delete(user: User): Promise<void> {
    await this.repository.remove(user)
  }
  async findAll({
    page,
    skip,
    take,
  }: PaginateParams): Promise<UsersPaginateProperties> {
    const [users, total] = await this.repository
      .createQueryBuilder('r')
      .leftJoinAndSelect('r.role', 'role')
      .skip(skip)
      .take(take)
      .getManyAndCount()

    return {
      per_page: take,
      total,
      current_page: page,
      data: users,
    }
  }
  async findByEmail(email: string): Promise<User | null> {
    return this.repository.findOne({
      where: { email },
      relations: ['role']
    })
  }
  async findByName(name: string): Promise<User | null> {
    return this.repository.findOneBy({ name })
  }

  async findById(id: string): Promise<User | null> {
    return this.repository.findOne({
      where: { id },
      relations: ['role']
    })
  }
}
