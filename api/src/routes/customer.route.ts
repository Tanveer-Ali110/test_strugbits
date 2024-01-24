import { Router } from "express";
import multer from "multer";
import { create, edit, remove, getAll } from "@controller/customer.controller";
import { validateBody, validateParams } from "@middleware/vaidation.middleware";
import { createCustomerSchema } from "@utils/validator";

const customer = Router();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  },
});
var upload = multer({ storage: storage });

customer.post("/", upload.single("profile_picture"), create);
customer.get("/", getAll);
customer.put("/:id", validateParams,upload.single("profile_picture"), edit);
customer.delete("/:id", validateParams, remove);

export default customer;
