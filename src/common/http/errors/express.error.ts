import { NextFunction, Request, Response } from "express";
import Youch from "youch";

import AppError from "./app.errors";

export const expressError = async (
  err: Error,
  request: Request,
  response: Response,
  _: NextFunction
) => {
  if (process.env.NODE_ENV !== "production") {
    const errors = await new Youch(err, request).toJSON();
    return response.status(500).json(errors);
  }

  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });
};
