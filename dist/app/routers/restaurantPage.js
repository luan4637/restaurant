"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantPage = void 0;
const express_1 = require("express");
const RestaurantController_1 = require("../controllers/RestaurantController");
exports.restaurantPage = (0, express_1.Router)();
exports.restaurantPage.get('/', (req, res, next) => {
    const restaurantController = new RestaurantController_1.RestaurantController(req, res);
    restaurantController.index();
});
exports.restaurantPage.get('/restaurant', (req, res, next) => {
    const restaurantController = new RestaurantController_1.RestaurantController(req, res);
    restaurantController.index();
});
exports.restaurantPage.post('/restaurant/update/:id', (req, res, next) => {
    const restaurantController = new RestaurantController_1.RestaurantController(req, res);
    restaurantController.update();
});
