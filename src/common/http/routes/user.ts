import { UserController } from "@modules/user/controllers/user.controller";
import { Request, Response, Router } from "express";

const userRouter = Router();

const userController = new UserController();

userRouter.get(
  "/view/:id",
  async (request: Request, response: Response) => {
    return userController.view(request, response);
  }
);

userRouter.get(
  "/list",
  async (request: Request, response: Response) => {
    return userController.list(request, response);
  }
);

userRouter.get(
  "/list/adults",
  async (request: Request, response: Response) => {
    return userController.listAdults(request, response);
  }
);

userRouter.get(
  "/list/childrens",
  async (request: Request, response: Response) => {
    return userController.listChildrens(request, response);
  }
);

export { userRouter };
