import { Router } from "express";

import { userRouter } from "./user";

const routes = Router();

routes.use("/user", userRouter);

export { routes };
