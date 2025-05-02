import { BaseEntity, Repository } from 'typeorm';
import { GenericRepositoryInterface } from "./GenericRepositoryInterface";

export abstract class GenericRepository<T extends BaseEntity> implements GenericRepositoryInterface<T>
{
    protected repository: Repository<T>;

    constructor(repository: Repository<T>) {
        this.repository = repository;
    }

    findAll(): Promise<T[]> {
        return this.repository.find();
    }

    findById(id: number): Promise<T|null> {
        return this.repository.findOneById(id);
    }

    save(item: T): Promise<T> {
        return this.repository.save(item);
    }

    async update(id: number, newItem: T): Promise<T|null> {
        const item: T|null = await this.findById(id);

        if (item != null) {
            this.repository.merge(item, newItem);
            return await this.save(item);
        }

        return item;
    }
}