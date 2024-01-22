import { NextFunction, RequestHandler, Response } from "express";
// import { CustomError } from "./error";

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction):Response => {
    try {
        // const status = error instanceof CustomError ? error.HttpStatus : 500;
        const message: string = error.message || 'Something went wrong';
        // logger.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`);
        return res.status(500).json({ message });
      } catch (error) {
        next(error);
      }
}