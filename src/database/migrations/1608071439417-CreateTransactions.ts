import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateTransactions1608071439417
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'transactions',
        columns: [
          // C-ID
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          // C-TITLE
          {
            name: 'title',
            type: 'varchar',
          },
          // C-TYPE
          {
            name: 'type',
            type: 'varchar',
          },
          // C-VALUE
          {
            name: 'value',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          // C-CREATED_AT
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          // C-UPDATED_AT
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('transactions');
  }
}
