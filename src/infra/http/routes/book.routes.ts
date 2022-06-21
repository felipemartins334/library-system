import { Router } from "express";
import { CreateBookController } from "../../../modules/books/useCases/CreateBook/CreateBookController";
import { CreateGenreController } from "../../../modules/books/useCases/CreateGenre/CreateGenreController";

const bookRoutes = Router()

const createBookController = new CreateBookController()
const createGenreController = new CreateGenreController()

bookRoutes.post("/", createBookController.handle)
bookRoutes.post("/genres", createGenreController.handle)

export { bookRoutes }