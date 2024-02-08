import express, {
  Application,
  Request,
  RequestHandler,
  Response,
} from "express";
import "express-async-errors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import BaseRouter from "./routes";
import Config from "./config/environment";
import { errorHandler } from "@middleware/errorHandler";

export const createServer = (): Application => {
  const app: Application = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  app.use(express.static(__dirname + '/public'));
  app.use('/uploads', express.static('uploads'));

  if (Config.nodeEnv === "development") {
    app.use(morgan("dev"));
    app.use(cors());
  }
  if (Config.nodeEnv === "production") {
    app.use(helmet());
  }

  // Add APIs
  app.use("/api", BaseRouter);

  // Setup error handler
  app.use(errorHandler as unknown as RequestHandler);

  app.get("/", (_: Request, res: Response) => {
    res.send("Express server with TypeScript");
  });

  return app;
};
