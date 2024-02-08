import { Router } from "express";
import { create, edit, remove, getAll } from "@controller/customer.controller";
import { validateParams } from "@middleware/vaidation.middleware";
import { upload } from "@middleware/multer";

const customer = Router();

customer.post("/", upload.single("profile_picture"), create);
customer.get("/", getAll);
customer.put("/:id", validateParams, upload.single("profile_picture"), edit);
customer.delete("/:id", validateParams, remove);

export default customer;
