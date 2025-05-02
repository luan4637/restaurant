import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";

@Entity()
export class RestaurantModel extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    category: string;

    @Column('text')
    desc: string;

    @Column()
    city: string;

    @Column()
    rating_count: number;

    @Column({type: "decimal", precision: 10, scale: 1, default: 0})
    rating: number;

    @Column()
    price_range: string;

    @Column("text")
    images: string;

    @Column("text")
    featured: string;

    @Column({ default: false })
    isFavorite: boolean = true;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
