import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm'

export class AddRoleIDToUsersTable1708460936493 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'users',
            new TableColumn({
                name: 'roleId',
                type: 'uuid',
                isNullable: true,
            }),
        )
        await queryRunner.createForeignKey(
            'users',
            new TableForeignKey({
                name: 'UsersRoles',
                columnNames: ['roleId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'roles',
                onDelete: 'SET NULL',
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('users', 'UsersRoles')
        await queryRunner.dropColumn('users', 'roleId')
    }
}
