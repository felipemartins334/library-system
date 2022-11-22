"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rentalsRoutes = void 0;
const express_1 = require("express");
const CreateRentalController_1 = require("../../../modules/rentals/useCases/CreateRental/CreateRentalController");
const DeleteRentalController_1 = require("../../../modules/rentals/useCases/DeleteRental/DeleteRentalController");
const GetRentalsController_1 = require("../../../modules/rentals/useCases/GetRentals/GetRentalsController");
const rentalsRoutes = (0, express_1.Router)();
exports.rentalsRoutes = rentalsRoutes;
const createRentalController = new CreateRentalController_1.CreateRentalController();
const getRentalsController = new GetRentalsController_1.GetRentalsController();
const deleteRentalsController = new DeleteRentalController_1.DeleteRentalsController();
rentalsRoutes.post("/", createRentalController.handle);
rentalsRoutes.get("/", getRentalsController.handle);
rentalsRoutes.delete("/", deleteRentalsController.handle);
