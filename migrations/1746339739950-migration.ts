import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1746339739950 implements MigrationInterface {
    name = 'Migration1746339739950'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "restaurant_model" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "category" character varying NOT NULL, "desc" text NOT NULL, "city" character varying NOT NULL, "rating_count" integer NOT NULL, "rating" numeric(10,1) NOT NULL DEFAULT '0', "price_range" character varying NOT NULL, "images" text NOT NULL, "featured" text NOT NULL, "isFavorite" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_387202176b5286f5190f0496718" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "restaurant_model"`);
    }

}
