import { FindOptionsWhere } from 'typeorm';

export interface GenericRepositoryInterface<T>
{
    findAll(): Promise<T[]>;

    findById(id: number): Promise<T|null>;

    save(item: T): Promise<T>;

    update(id: number, newItem: T): Promise<T|null>;
}