import { Role } from '@roles/entities/roles'
import { User } from '@users/entities/user'

export type CreateUserDTO = {
  name: string
  email: string
  password: string
  isAdmin: boolean
  avatar?: string
  role: Role
  team: string
  theme: 'light' | 'dark'
  verificationToken?: string,
  isVerified: boolean
  resetPasswordToken?: string
}

export type PaginateParams = {
  page: number
  skip: number
  take: number
}
export type UsersPaginateProperties = {
  per_page: number
  total: number
  current_page: number
  data: User[]
}

export interface IUsersRepository {
  create({
    name,
    email,
    password,
    isAdmin,
    avatar,
    role,
    team,
    theme,
    verificationToken,
    isVerified,
    resetPasswordToken
  }: CreateUserDTO): Promise<User>
  update(user: User): Promise<User>
  delete(user: User): Promise<void>
  findAll({
    page,
    skip,
    take,
  }: PaginateParams): Promise<UsersPaginateProperties>
  findByEmail(email: string): Promise<User | null>
  findByName(name: string): Promise<User | null>
  findById(id: string): Promise<User | null>
}
