import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateChatModel1758491348278 implements MigrationInterface {
    name = 'UpdateChatModel1758491348278'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chats" DROP COLUMN "contactId"`);
        await queryRunner.query(`ALTER TABLE "chats" DROP COLUMN "pinned"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chats" ADD "pinned" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "chats" ADD "contactId" uuid NOT NULL`);
    }

}
