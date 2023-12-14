import { DataSource } from "typeorm"
import { CreatePersonaTable1702503107359 } from "./migrations/1702503107359-CreatePersonaTable"

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [],
  migrations: [
    CreatePersonaTable1702503107359
  ],
})
