import express, { Router, Request, Response } from 'express';
import { RestaurantController } from '../controllers/RestaurantController';

const path = require('path');
const rootPath = path.resolve('./');

export const restaurantPage = Router();

restaurantPage.use(express.static(rootPath + '/dist/public/'));
restaurantPage.get('/', (req: Request, res: Response, next) => {
    res.sendFile(rootPath + '/dist/public/' + 'index.html');
});

restaurantPage.get('/restaurant', (req: Request, res: Response, next) => {
    const restaurantController = new RestaurantController(req, res);
    restaurantController.index();
});

restaurantPage.post('/restaurant/update/:id', (req: Request, res: Response, next) => {
    const restaurantController = new RestaurantController(req, res);
    restaurantController.update();
});
