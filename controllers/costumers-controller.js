import User from "../models/costumer.js";
import { ctrlWrapper } from "../decorators/index.js";

const add = async (req, res) => {
  const result = await User.create({ ...req.body });
  res.status(201).json(result);
};
export default {
  add: ctrlWrapper(add),
};
