import Item from "../models/item.js";

import { ctrlWrapper } from "../decorators/index.js";

import HttpError from "../helpers/httpError.js";

const getAll = async (req, res) => {
  const result = await Item.find();
  res.json(result);
};

const getById = async (req, res) => {
  const { itemId } = req.params;

  const result = await Item.findById(itemId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const add = async (req, res) => {
  const result = await Item.create({ ...req.body });
  res.status(201).json(result);
};

const deleteById = async (req, res) => {
  const { itemId } = req.params;
  const result = await Item.findByIdAndDelete(itemId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "contact deleted" });
};

const updateById = async (req, res) => {
  const { itemId } = req.params;
  const result = await Item.findByIdAndUpdate(itemId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

export default {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  deleteById: ctrlWrapper(deleteById),
  updateById: ctrlWrapper(updateById),
};
