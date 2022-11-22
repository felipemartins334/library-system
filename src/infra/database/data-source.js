"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("../../modules/accounts/infra/typeorm/entities/User");
const Book_1 = require("../../modules/books/infra/typeorm/entities/Book");
const Rental_1 = require("../../modules/rentals/infra/typeorm/entities/Rental");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "sqluser",
    password: "password",
    database: "library",
    entities: [User_1.User, Book_1.Book, Rental_1.Rental],
    synchronize: true,
    logging: false,
});
exports.AppDataSource.initialize()
    .then(() => {
})
    .catch((error) => console.log(error));
