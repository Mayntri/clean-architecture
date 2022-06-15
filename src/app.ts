import express from "express";
import compression from "compression";
import expressWinston from "express-winston";
import logger from "@infrastructure/logger";

const app = express();

app.use(compression());
app.use(
  expressWinston.logger(logger)
);

app.get("/", (req, res) => {
  res.send("Hello World! - Winston logged");
});

export default app;
