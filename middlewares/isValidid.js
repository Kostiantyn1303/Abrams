import { isValidObjectId } from "mongoose";

import HttpError from "../helpers/httpError.js";

const isValidId = (req, res, next) => {
  const { itemId } = req.params;
  if (!isValidObjectId(itemId)) {
    return next(HttpError(404, `${itemId} is not valid id`));
  }
  next();
};

export default isValidId;
