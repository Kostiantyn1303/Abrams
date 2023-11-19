import express from "express";
import { validateBody } from "../decorators/index.js";
import userAddSchema from "../schames/costumres-schames.js";
import userController from "../controllers/costumers-controller.js";

const userRouter = express.Router();
userRouter.post("/order", validateBody(userAddSchema), userController.add);

export default userRouter;
