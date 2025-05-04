import { RestaurantRepositoryInterface } from "./RestaurantRepositoryInterface";
import { RestaurantModel } from "./RestaurantModel";
import { GenericRepository } from "../../infrastructure/generic/GenericRepository";
import { AppDataSource } from "../../infrastructure/dataSource/AppDataSource";

export class RestaurantRepository extends GenericRepository<RestaurantModel> implements RestaurantRepositoryInterface
{
    constructor() {
        super(AppDataSource.getRepository(RestaurantModel));
    }

    getLatest(): Promise<RestaurantModel[]> {
        return this.repository.find({
            order: {
                id: "DESC",
            }
        });
    }
}