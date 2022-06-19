import "reflect-metadata";
import "express-async-errors";
import express from "express";
import compression from "compression";
import expressWinston from "express-winston";
import cookieParser from "cookie-parser";
import methodOverride from "method-override";
import helmet from "helmet";
import logger from "@infrastructure/logger";
import dbInit from "./data-access/init";
import routes from "./api/routes";
import errorResponder from './errorResponder';

dbInit();

const app = express();

app.use(methodOverride());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression());
// app.use(expressWinston.logger(logger));

app.use(routes);

app.use(errorResponder);

export default app;
