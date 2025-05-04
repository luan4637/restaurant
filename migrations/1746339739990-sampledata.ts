import { MigrationInterface, QueryRunner } from "typeorm";

export class Sampledata1746339739990 implements MigrationInterface {
    name = 'Sampledata1746339739990'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO "restaurant_model" ("id", "name", "category", "desc", "city", "rating_count", "rating", "price_range", "images", "featured", "isFavorite", "createdAt", "updatedAt") VALUES
            (1, 'Kagurazaka Ishikawa Sushi Haru Nakanoshima Sushi', 'YAKITORI', 'Enjoy the highest quality Omakase with unlimited sake at a reasonable price.', 'osaka', 139, 4.2, '3~5', 'https://fastly.picsum.photos/id/56/400/300.jpg?hmac=yZbGLqJ27Ni6cg_pw2bD8fx7cka9RhiAN_2ht5KQntQ', '', false, '2025-05-02 16:16:04.202649', '2025-05-03 03:58:03.000000'),
            (2, 'Sushi Ginza Ishikawa', 'SUSHI', 'Provides fresh seafood and authentic sushi.', 'tokyo', 200, 4.5, '4~6', 'https://fastly.picsum.photos/id/557/400/300.jpg?hmac=DdhZzMtqhqVPgJCCs_apofp30QFn87JyUIjsd9mzSJc', '', false, '2025-05-02 16:16:04.202649', '2025-05-03 03:52:13.000000'),
            (3, 'Ichiran Ramen', 'RAMEN', 'Rich broth with a variety of toppings.', 'kyoto', 180, 4.7, '2~4', 'https://fastly.picsum.photos/id/737/400/300.jpg?hmac=ZRpsmyRkpOcXPwH5bptNaZddOKUsa9Y71IYmfvNZbY4', '', false, '2025-05-02 16:16:04.202649', '2025-05-03 03:31:55.000000'),
            (4, 'Tempura Matsuya', 'TEMPURA', 'Crispy and delicious tempura.', 'nagoya', 220, 4.3, '3~5', 'https://fastly.picsum.photos/id/765/400/300.jpg?hmac=fVYwJWGkpcDm6w5GZyPC5phkAWqjHB_SlPyOqCE3gSs', '', false, '2025-05-02 16:16:04.202649', '2025-05-03 03:40:41.000000'),
            (5, 'Kagurazaka Ishikawa Sushi Haru Nakanoshima Sushi', 'YAKITORI', 'Enjoy the highest quality Omakase with unlimited sake at a reasonable price.', 'osaka', 139, 4.2, '3~5', 'https://fastly.picsum.photos/id/40/400/300.jpg?hmac=8AGnAXOIIdCQBjrJbgkbN_3MwNkcN_UFm1dfEvy_p9g', '', false, '2025-05-02 16:16:04.202649', '2025-05-03 03:41:32.000000'),
            (6, 'Udon Taro', 'SOBA', 'Chewy noodles with rich broth.', 'fukuoka', 190, 4.6, '2~4', 'https://fastly.picsum.photos/id/369/400/300.jpg?hmac=3LUN-xHGRhWFnodEFbGp5jMfsAs0pMgnsN7hOFuw4DU', '', false, '2025-05-02 16:16:04.202649', '2025-05-03 02:42:37.169108'),
            (7, 'Kagurazaka Ishikawa Sushi Haru Nakanoshima Sushi', 'YAKITORI', 'Enjoy the highest quality Omakase with unlimited sake at a reasonable price.', 'osaka', 139, 4.2, '3~5', 'https://fastly.picsum.photos/id/239/400/300.jpg?hmac=Y0lXdob8aGElbBKHxqWcehLuMZzHsPRXt_mjpTbIklM', '', false, '2025-05-02 16:16:04.202649', '2025-05-03 02:42:37.169108'),
            (8, 'Kagurazaka Ishikawa Sushi Haru Nakanoshima Sushi', 'YAKITORI', 'Enjoy the highest quality Omakase with unlimited sake at a reasonable price.', 'osaka', 139, 4.2, '3~5', 'https://fastly.picsum.photos/id/527/400/300.jpg?hmac=QjbwkrNaHw3YiynFwk1Q9ISB0hujpiNv1TjNi37mV3c', '', false, '2025-05-02 16:16:04.202649', '2025-05-03 02:42:37.169108'),
            (9, 'Kagurazaka Ishikawa Sushi Haru Nakanoshima Sushi', 'YAKITORI', 'Enjoy the highest quality Omakase with unlimited sake at a reasonable price.', 'osaka', 139, 4.2, '3~5', 'https://fastly.picsum.photos/id/904/400/300.jpg?hmac=5qufktXceAkz_2BZnTBFsCeBnbo3jhxtDLISECwzNhM', '', false, '2025-05-02 16:16:04.202649', '2025-05-03 02:42:37.169108');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
