"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const user_routes_1 = require("./user.routes");
const book_routes_1 = require("./book.routes");
const rentals_routes_1 = require("./rentals.routes");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.use("/users", user_routes_1.usersRoutes);
routes.use("/books", book_routes_1.bookRoutes);
routes.use("/rentals", rentals_routes_1.rentalsRoutes);
