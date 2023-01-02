import { Request, Response, Router } from "express";
import { ValidatedRequest, createValidator } from "express-joi-validation";

import {
  authenticateSchema,
  confirmPasswordSchema,
  confirmTokenSchema,
  forgotPasswordSchema,
  IAuthenticateRequestSchema,
  IConfirmPasswordRequestSchema,
  IConfirmTokenRequestSchema,
  IForgotPasswordRequestSchema,
  IRegisterRequestSchema,
  IRenewAdminTokenRequestSchema,
  registerSchema,
  renewAdminTokenSchema,
} from "./validations/auth-admin.validations";

const authController = new AuthController();

const authRouter = Router();

const validator = createValidator();

authAdminRouter.post(
  "/register",
  validator.body(registerSchema),
  async (
    request: ValidatedRequest<IRegisterRequestSchema>,
    response: Response
  ) => {
    return authAdminController.register(request, response);
  }
);

authAdminRouter.post(
  "/authenticate",
  validator.body(authenticateSchema),
  async (
    request: ValidatedRequest<IAuthenticateRequestSchema>,
    response: Response
  ) => {
    return authAdminController.authenticate(request, response);
  }
);

authAdminRouter.post(
  "/forgot/password",
  validator.body(forgotPasswordSchema),
  async (
    request: ValidatedRequest<IForgotPasswordRequestSchema>,
    response: Response
  ) => {
    return authAdminController.forgotPassword(request, response);
  }
);

authAdminRouter.post(
  "/confirm/token",
  validator.body(confirmTokenSchema),
  async (
    request: ValidatedRequest<IConfirmTokenRequestSchema>,
    response: Response
  ) => {
    return authAdminController.confirmRequestForgotPasswordToken(request, response);
  }
);

authAdminRouter.post(
  "/confirm/password",
  validator.body(confirmPasswordSchema),
  async (
    request: ValidatedRequest<IConfirmPasswordRequestSchema>,
    response: Response
  ) => {
    return authAdminController.confirmPassword(request, response);
  }
);

authAdminRouter.get(
  "/me",
  authAdminMiddleware.authenticateJWT,
  async (request: Request, response: Response) => {
    return authAdminController.me(request, response);
  }
);

authAdminRouter.post(
  "/renew",
  validator.body(renewAdminTokenSchema),
  async (
    request: ValidatedRequest<IRenewAdminTokenRequestSchema>,
    response: Response
  ) => {
    return authAdminController.renew(request, response);
  }
);

export { authAdminRouter };
