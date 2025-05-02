import { Router, Request, Response } from 'express';
import { RestaurantController } from '../controllers/RestaurantController';

export const restaurantPage = Router();

restaurantPage.get('/', (req: Request, res: Response, next) => {
    const restaurantController = new RestaurantController(req, res);
    restaurantController.index();
});

restaurantPage.post('/restaurant/update/:id', (req: Request, res: Response, next) => {
    const restaurantController = new RestaurantController(req, res);
    restaurantController.update();
});
