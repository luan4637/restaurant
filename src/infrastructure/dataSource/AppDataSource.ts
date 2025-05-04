import "reflect-metadata"
import { DataSource } from "typeorm"
import { RestaurantModel } from "../../core/restaurant/RestaurantModel";

const path = require('path');
const process = require('process');
const rootPath = path.resolve('./');
const env = process.env.NODE_ENV || 'development';
const config = require(rootPath + '/config/config.json')[env];
const configtest = require(rootPath + '/config/config.json');

console.log(configtest);

export const AppDataSource = new DataSource({
    type: config.dialect || 'mysql',
    host: config.host || 'localhost',
    port: config.port || 3306,
    username: config.username || 'restaurant_user',
    password: config.password || 'restaurant_password',
    database: config.database || 'restaurant_db',
    entities: [
        RestaurantModel
    ],
    // migrations: [
    //     rootPath + '/migrations/*'
    // ],
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