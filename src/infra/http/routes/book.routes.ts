import { Router } from "express";
import { CreateBookController } from "../../../modules/books/UseCases/CreateBook/CreateBookController";

const bookRoutes = Router()

const createBookController = new CreateBookController()

bookRoutes.post("/", createBookController.handle)

export { bookRoutes }