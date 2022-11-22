import { Router } from "express";

import { CreateBookController } from "../../../modules/books/useCases/CreateBook/CreateBookController";
import { DeleteBookController } from "../../../modules/books/useCases/DeleteBook/DeleteBookController";
import { GetBooksController } from "../../../modules/books/useCases/GetBooks/GetBooksController";

const bookRoutes = Router()

const createBookController = new CreateBookController()
const deleteBookController = new DeleteBookController()
const getBooksController = new GetBooksController()

bookRoutes.post("/", createBookController.handle)
bookRoutes.get("/", getBooksController.handle)
bookRoutes.delete("/", deleteBookController.handle)

export { bookRoutes }