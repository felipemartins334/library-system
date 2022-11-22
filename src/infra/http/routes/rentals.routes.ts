import { Router } from "express";
import { CreateRentalController } from "../../../modules/rentals/useCases/CreateRental/CreateRentalController";
import { DeleteRentalsController } from "../../../modules/rentals/useCases/DeleteRental/DeleteRentalController";
import { GetRentalsController } from "../../../modules/rentals/useCases/GetRentals/GetRentalsController";


const rentalsRoutes = Router()

const createRentalController = new CreateRentalController()
const getRentalsController = new GetRentalsController()
const deleteRentalsController = new DeleteRentalsController()


rentalsRoutes.post("/", createRentalController.handle)
rentalsRoutes.get("/", getRentalsController.handle)
rentalsRoutes.delete("/", deleteRentalsController.handle)

export { rentalsRoutes }