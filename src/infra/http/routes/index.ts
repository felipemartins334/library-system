import { Router } from "express"
import { usersRoutes } from "./user.routes"
import { bookRoutes } from "./book.routes"

const routes = Router()

routes.use("/users", usersRoutes)
routes.use("/books", bookRoutes)

export { routes }