import { Router } from "express";
import { AddGenreToBookController } from "../../../modules/books/useCases/AddGenreToBook/AddGenreToBookController";
import { CreateBookController } from "../../../modules/books/useCases/CreateBook/CreateBookController";
import { CreateGenreController } from "../../../modules/books/useCases/CreateGenre/CreateGenreController";
import { GetBooksController } from "../../../modules/books/useCases/GetBooks/GetBooksController";

const bookRoutes = Router()

const createBookController = new CreateBookController()
const createGenreController = new CreateGenreController()
const addGenreToBookController = new AddGenreToBookController()
const getBooksController = new GetBooksController()

bookRoutes.post("/", createBookController.handle)
bookRoutes.post("/genres", createGenreController.handle)
bookRoutes.post("/genres/add", addGenreToBookController.handle)
bookRoutes.get("/", getBooksController.handle)

export { bookRoutes }