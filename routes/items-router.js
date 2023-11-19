import express from "express";

import itemsController from "../controllers/items-controller.js";

import itemsAddSchema from "../schames/items-schames.js";

import { validateBody } from "../decorators/index.js";

import { isEmptyBody, isValidId } from "../middlewares/index.js";

const itemsRouter = express.Router();

itemsRouter.get("/", itemsController.getAll);

itemsRouter.get("/:itemId", isValidId, itemsController.getById);

itemsRouter.post(
  "/",
  isEmptyBody,
  validateBody(itemsAddSchema),
  itemsController.add
);

itemsRouter.delete("/:itemId", isValidId, itemsController.deleteById);

export default itemsRouter;
