import { Role } from '@roles/entities/roles'
import { DataSource } from 'typeorm'
import { CreateRolesTable1710368510696 } from './migrations/1710368510696-CreateRolesTable'
import { CreateUsersTable1712331678814 } from './migrations/1712331678814-CreateUsersTable'
import { User } from '@users/entities/user'
import { AddRoleIDToUsersTable1708460936493 } from './migrations/1712351522750-AddRoleIdToUsersTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role, User],
  migrations: [
    CreateRolesTable1710368510696,
    CreateUsersTable1712331678814,
    AddRoleIDToUsersTable1708460936493
  ],
  logging: ['query', 'error'],
})
