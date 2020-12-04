import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUsers1606872168721 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true, generationStrategy: 'uuid', default: 'uuid_generate_v4()' },

          { name: 'email', type: 'varchar', isUnique: true },
          { name: 'password', type: 'varchar' },
          { name: 'first_name', type: 'varchar' },
          { name: 'last_name', type: 'varchar' },
          { name: 'mobile', type: 'varchar', isNullable: true },
          { name: 'fbid', type: 'varchar', isNullable: true },
          { name: 'gcm_token', type: 'varchar', isNullable: true },
          { name: 'status', type: 'int', default: 1 },
          { name: 'latitude', type: 'varchar', isNullable: true },
          { name: 'longitude', type: 'varchar', isNullable: true },
          { name: 'avatar', type: 'varchar', isNullable: true },

          { name: 'created_at', type: 'timestamp', default: 'now()' },
          { name: 'updated_at', type: 'timestamp', default: 'now()' },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
