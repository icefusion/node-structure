import "reflect-metadata";
import "dotenv/config";
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import fileUpload from 'express-fileupload';

import AppError from "./errors/app.errors";
import { routes } from "./routes";
import Youch from "youch";

const app = express();

app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(routes);

app.use(
  async (err: Error, request: Request, response: Response, _: NextFunction) => {
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
  }
);

app.get("/", (req, res) => {
  res.send("Welcome to API Example!!!");
});

export default app;
