import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1756922254951 implements MigrationInterface {
    name = 'Init1756922254951'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "messages" ("messageId" uuid NOT NULL, "senderId" uuid NOT NULL, "text" text NOT NULL, "datetimeTs" TIMESTAMP NOT NULL, "hasBeenRead" boolean NOT NULL, "chat_id" uuid, CONSTRAINT "PK_9743b3cec687ac55895f0d79ae0" PRIMARY KEY ("messageId"))`);
        await queryRunner.query(`CREATE TABLE "chats" ("id" uuid NOT NULL, "contactId" uuid NOT NULL, "contactName" character varying NOT NULL, "contactUserName" character varying NOT NULL, "isOnline" boolean NOT NULL DEFAULT false, "onlineDateTimeTs" TIMESTAMP, CONSTRAINT "PK_0117647b3c4a4e5ff198aeb6206" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "messages" ADD CONSTRAINT "FK_7540635fef1922f0b156b9ef74f" FOREIGN KEY ("chat_id") REFERENCES "chats"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "messages" DROP CONSTRAINT "FK_7540635fef1922f0b156b9ef74f"`);
        await queryRunner.query(`DROP TABLE "chats"`);
        await queryRunner.query(`DROP TABLE "messages"`);
    }

}
