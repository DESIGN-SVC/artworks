import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePersonaTable1702503107359 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'persona',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true
        },
        {
          name: 'nome',
          type: 'string',
          isUnique: true
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'CURRENT_TIMESTAMP'
        },
        {
          name: "profession",
          type: "string",
        },
        {
          name: "nationality",
          type: "string"
        },
        {
          name: "attributes",
          type: "object"
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('persona')
  }

}
