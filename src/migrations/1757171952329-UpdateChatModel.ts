import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateChatModel1757171952329 implements MigrationInterface {
    name = 'UpdateChatModel1757171952329'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "chat_messages" ("id" uuid NOT NULL, "text" text NOT NULL, "createTs" TIMESTAMP NOT NULL DEFAULT now(), "updateTs" TIMESTAMP NOT NULL DEFAULT now(), "edited" boolean NOT NULL DEFAULT false, "type" character varying NOT NULL, "status" character varying NOT NULL, "replyTo" character varying, "chatId" uuid NOT NULL, CONSTRAINT "PK_40c55ee0e571e268b0d3cd37d10" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "chats" DROP COLUMN "contactName"`);
        await queryRunner.query(`ALTER TABLE "chats" DROP COLUMN "contactUserName"`);
        await queryRunner.query(`ALTER TABLE "chats" DROP COLUMN "isOnline"`);
        await queryRunner.query(`ALTER TABLE "chats" DROP COLUMN "onlineDateTimeTs"`);
        await queryRunner.query(`ALTER TABLE "chats" ADD "pinned" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "chats" ADD "createTs" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "chats" ADD "updateTs" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "chats" ADD "archived" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "chat_messages" ADD CONSTRAINT "FK_e82334881c89c2aef308789c8be" FOREIGN KEY ("chatId") REFERENCES "chats"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chat_messages" DROP CONSTRAINT "FK_e82334881c89c2aef308789c8be"`);
        await queryRunner.query(`ALTER TABLE "chats" DROP COLUMN "archived"`);
        await queryRunner.query(`ALTER TABLE "chats" DROP COLUMN "updateTs"`);
        await queryRunner.query(`ALTER TABLE "chats" DROP COLUMN "createTs"`);
        await queryRunner.query(`ALTER TABLE "chats" DROP COLUMN "pinned"`);
        await queryRunner.query(`ALTER TABLE "chats" ADD "onlineDateTimeTs" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "chats" ADD "isOnline" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "chats" ADD "contactUserName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "chats" ADD "contactName" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "chat_messages"`);
    }

}
