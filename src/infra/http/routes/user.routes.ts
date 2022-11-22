import { Router } from "express";
import { CreateUserController } from "../../../modules/accounts/useCases/CreateUser/CreateUserController";
import { DeleteUserController } from "../../../modules/accounts/useCases/DeleteUser/DeleteUserController";
import { GetUserController } from '../../../modules/accounts/useCases/GetUser/GetUserController'

const usersRoutes = Router()

const createUserController = new CreateUserController()
const deleteUserController = new DeleteUserController()
const getUserController = new GetUserController()

usersRoutes.post("/", createUserController.handle)
usersRoutes.delete("/", deleteUserController.handle)
usersRoutes.get("/", getUserController.handle)

export { usersRoutes }