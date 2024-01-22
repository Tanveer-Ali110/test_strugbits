import { NextFunction, Request, Response } from "express";
import { Customer } from "entity/schema";

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const file = req.file
    const { name, user_name, email } = req.body;
    const data = {
      name,
      user_name,
      email,
      profile_picture:`${__dirname}${req.file.filename}` 
    };
    const response = await Customer.create(data);
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};

export const getAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await Customer.find();
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};
export const edit = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const { name, user_name, email } = req.body;
    const data = {
      name,
      user_name,
      email,
    };
    const response = await Customer.findByIdAndUpdate(id, data, { new: true });
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};
export const remove = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const response = await Customer.findByIdAndDelete(id);
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};
