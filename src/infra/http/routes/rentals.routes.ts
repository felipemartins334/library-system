import { Router } from "express";
import { CreateRentalController } from "../../../modules/rentals/useCases/CreateRental/CreateRentalController";


const rentalsRoutes = Router()

const createRentalController = new CreateRentalController()

rentalsRoutes.post("/", createRentalController.handle)

export { rentalsRoutes }