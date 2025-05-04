import { Request, Response } from "express";
import { BaseController } from "./base/BaseController";
import { RestaurantRepository } from "../../core/restaurant/RestaurantRepository";
import { RestaurantRepositoryInterface } from "../../core/restaurant/RestaurantRepositoryInterface";
import { RestaurantModel } from "../../core/restaurant/RestaurantModel";

export class RestaurantController extends BaseController
{
    private restaurantRepository: RestaurantRepositoryInterface;

    constructor(req: Request, res: Response)
    {
        super(req, res);
        this.restaurantRepository = new RestaurantRepository();
    }

    index()
    {
        const results = this.restaurantRepository.getLatest();
        
        this.jsonResponse(results);
    }

    update()
    {
        const id: number = parseInt(this.req.params.id);
        const restaurant: Promise<RestaurantModel|null> = this.restaurantRepository.update(id, this.req.body);
        
        this.jsonResponse(restaurant);
    }
}