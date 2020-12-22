import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateCategories1608075620779
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'categories',
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
    await queryRunner.dropTable('categories');
  }
}
