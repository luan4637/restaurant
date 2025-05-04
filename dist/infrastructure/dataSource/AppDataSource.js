"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const RestaurantModel_1 = require("../../core/restaurant/RestaurantModel");
const path = require('path');
const process = require('process');
const rootPath = path.resolve('./');
const env = process.env.NODE_ENV || 'development';
const config = require(rootPath + '/config/config.json')[env];
exports.AppDataSource = new typeorm_1.DataSource({
    type: config.dialect,
    host: config.host || 'localhost',
    port: config.port || 3306,
    username: config.username,
    password: config.password,
    database: config.database,
    entities: [
        RestaurantModel_1.RestaurantModel
    ],
    migrations: [
        rootPath + '/migrations/*'
    ],
    // logging: true,
    synchronize: false
});
exports.AppDataSource.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
})
    .catch((err) => {
    console.error("Error during Data Source initialization", err);
});
