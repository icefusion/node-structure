import "reflect-metadata";
import "dotenv/config";
import "express-async-errors";
import cors from "cors";
import express from "express";
import fileUpload from "express-fileupload";

import { expressError } from "./errors/express.error";
import { routes } from "./routes";

const app = express();

app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(routes);

app.use(expressError);

app.get("/", (req, res) => {
  res.send("Welcome to API Example!!!");
});

export default app;
