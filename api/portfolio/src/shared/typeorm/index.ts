import { Role } from '@roles/entities/roles'
import { DataSource } from 'typeorm'
import { CreateRolesTable1710368510696 } from './migrations/1710368510696-CreateRolesTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [CreateRolesTable1710368510696],
})
