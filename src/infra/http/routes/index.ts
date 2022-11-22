import { Router } from "express"
import { usersRoutes } from "./user.routes"
import { bookRoutes } from "./book.routes"
import { rentalsRoutes } from "./rentals.routes"

const routes = Router()

routes.use("/users", usersRoutes)
routes.use("/books", bookRoutes)
routes.use("/rentals", rentalsRoutes)
   
export { routes }