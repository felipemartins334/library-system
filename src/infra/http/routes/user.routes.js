"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const CreateUserController_1 = require("../../../modules/accounts/useCases/CreateUser/CreateUserController");
const DeleteUserController_1 = require("../../../modules/accounts/useCases/DeleteUser/DeleteUserController");
const GetUserController_1 = require("../../../modules/accounts/useCases/GetUser/GetUserController");
const usersRoutes = (0, express_1.Router)();
exports.usersRoutes = usersRoutes;
const createUserController = new CreateUserController_1.CreateUserController();
const deleteUserController = new DeleteUserController_1.DeleteUserController();
const getUserController = new GetUserController_1.GetUserController();
usersRoutes.post("/", createUserController.handle);
usersRoutes.delete("/", deleteUserController.handle);
usersRoutes.get("/", getUserController.handle);
