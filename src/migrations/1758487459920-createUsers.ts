import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsers1758487459920 implements MigrationInterface {
    name = 'CreateUsers1758487459920'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying(50), "phoneNumber" bigint NOT NULL, "password" character varying NOT NULL, "firstName" character varying(100), "secondName" character varying(100), "avatar" character varying, "createAccountTs" TIMESTAMP NOT NULL DEFAULT now(), "lastSeenTs" TIMESTAMP, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_chats" ("user_id" uuid NOT NULL, "chat_id" uuid NOT NULL, CONSTRAINT "PK_f3468788830de892c518b510b06" PRIMARY KEY ("user_id", "chat_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e4ae183f8d8d5877abe69258f5" ON "user_chats" ("user_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_0f13bfb7f04f216ab4b485516f" ON "user_chats" ("chat_id") `);
        await queryRunner.query(`ALTER TABLE "chat_messages" ADD "fromUserId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "chat_messages" ADD "toUserId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_chats" ADD CONSTRAINT "FK_e4ae183f8d8d5877abe69258f51" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_chats" ADD CONSTRAINT "FK_0f13bfb7f04f216ab4b485516f6" FOREIGN KEY ("chat_id") REFERENCES "chats"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_chats" DROP CONSTRAINT "FK_0f13bfb7f04f216ab4b485516f6"`);
        await queryRunner.query(`ALTER TABLE "user_chats" DROP CONSTRAINT "FK_e4ae183f8d8d5877abe69258f51"`);
        await queryRunner.query(`ALTER TABLE "chat_messages" DROP COLUMN "toUserId"`);
        await queryRunner.query(`ALTER TABLE "chat_messages" DROP COLUMN "fromUserId"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0f13bfb7f04f216ab4b485516f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e4ae183f8d8d5877abe69258f5"`);
        await queryRunner.query(`DROP TABLE "user_chats"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
