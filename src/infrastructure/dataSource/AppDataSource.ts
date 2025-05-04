import "reflect-metadata"
import { DataSource } from "typeorm"
import { RestaurantModel } from "../../core/restaurant/RestaurantModel";

const path = require('path');
const process = require('process');
const rootPath = path.resolve('./');
const env = process.env.NODE_ENV || 'development';
const config = require(rootPath + '/config/config.json')[env];

export const AppDataSource = new DataSource({
    type: config.dialect,
    host: config.host || 'localhost',
    port: config.port || 3306,
    username: config.username,
    password: config.password,
    database: config.database,
    entities: [
        RestaurantModel
    ],
    migrations: [
        rootPath + '/migrations/*'
    ],
    // logging: true,
    synchronize: false,
});

AppDataSource.initialize()
.then(() => {
    console.log("Data Source has been initialized!")
})
.catch((err) => {
    console.error("Error during Data Source initialization", err)
})