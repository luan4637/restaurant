"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantRepository = void 0;
const RestaurantModel_1 = require("./RestaurantModel");
const GenericRepository_1 = require("../../infrastructure/generic/GenericRepository");
const AppDataSource_1 = require("../../infrastructure/dataSource/AppDataSource");
class RestaurantRepository extends GenericRepository_1.GenericRepository {
    constructor() {
        super(AppDataSource_1.AppDataSource.getRepository(RestaurantModel_1.RestaurantModel));
    }
    getLatest() {
        return this.repository.find({
            order: {
                id: "DESC",
            }
        });
    }
}
exports.RestaurantRepository = RestaurantRepository;
