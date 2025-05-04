"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantController = void 0;
const BaseController_1 = require("./base/BaseController");
const RestaurantRepository_1 = require("../../core/restaurant/RestaurantRepository");
class RestaurantController extends BaseController_1.BaseController {
    constructor(req, res) {
        super(req, res);
        this.restaurantRepository = new RestaurantRepository_1.RestaurantRepository();
    }
    index() {
        const results = this.restaurantRepository.findAll();
        this.jsonResponse(results);
    }
    update() {
        const id = parseInt(this.req.params.id);
        const restaurant = this.restaurantRepository.update(id, this.req.body);
        this.jsonResponse(restaurant);
    }
}
exports.RestaurantController = RestaurantController;
