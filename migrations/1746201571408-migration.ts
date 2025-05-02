import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1746201571408 implements MigrationInterface {
    name = 'Migration1746201571408'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`restaurant_model\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`category\` varchar(255) NOT NULL, \`desc\` text NOT NULL, \`city\` varchar(255) NOT NULL, \`rating_count\` int NOT NULL, \`rating\` decimal(10,1) NOT NULL DEFAULT '0.0', \`price_range\` varchar(255) NOT NULL, \`images\` text NOT NULL, \`featured\` text NOT NULL, \`isFavorite\` tinyint NOT NULL DEFAULT 0, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`restaurant_model\``);
    }

}
