import { RestaurantModel } from "./RestaurantModel";
import { GenericRepositoryInterface } from "../../infrastructure/generic/GenericRepositoryInterface";

export interface RestaurantRepositoryInterface extends GenericRepositoryInterface<RestaurantModel>
{
    getLatest(): Promise<RestaurantModel[]>;
}