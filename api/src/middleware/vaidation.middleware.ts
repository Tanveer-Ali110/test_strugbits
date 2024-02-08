import { ValidationException } from "@utils/exceptions";
import { NextFunction, Request, Response } from "express";
import { Types } from "mongoose";
import { ZodSchema } from "zod";

export const validateBody = <T>(schema: ZodSchema<T>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validationResult = schema.safeParse(req.body);
      if (!validationResult.success) {
        throw new Error((validationResult as any).error);
      }
      req.body = validationResult.data;
      next();
    } catch (error) {
      next(error);
    }
  };
};

export const validateParams = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    if (!Types.ObjectId.isValid(id)) {
      throw new ValidationException('Invalid ObjectId')
    }
    next();
  } catch (error) {
    next(error);
  }
};
