import { Router } from "express";
import { userController } from "@modules/user/controllers/user.controller";

const routes = Router();

userController.initialize(routes, '/user')

export { routes };
