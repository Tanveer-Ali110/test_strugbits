import { HttpException } from "@utils/exceptions";
import { NextFunction, Response } from "express";
import { MongooseError } from "mongoose";

export const errorHandler = (
  error: Error | HttpException,
  _: Request,
  res: Response,
  next: NextFunction
): Response => {
  try {
    let status = error instanceof HttpException ? error.HttpStatus : 500;
    if (error.name === "MongoServerError" && (error as any).code === 11000) {
      return res.status(422).json({ message: "User already exists" });
    }

    if (error instanceof MongooseError) {
      return mongooseError(res, error);
    }
    const message: string = error.message || "Something went wrong";
    return res.status(status).json({ message });
  } catch (error) {
    next(error);
  }
};

const mongooseError = (res: Response, error: any) => {
  switch (error.name) {
    case "ValidationError":
      const errors = Object.values((error as any).errors).map(
        (err: any) => err.path
      );
      return res
        .status(422)
        .send({ isError: true, message: `${errors[0]} is required` });
  }
};
