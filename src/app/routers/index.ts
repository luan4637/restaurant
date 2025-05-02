import express from 'express';
import { restaurantPage } from './restaurantPage';

export const routes = express.Router();

routes.use(restaurantPage);
