import { Schema, model } from "mongoose";
import { handleMongooseError, validateAtUpdate } from "./hooks.js";
const itemSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  image: {
    type: String,
  },
  imageBig: {
    type: String,
  },
  price: {
    type: String,
  },
  description: {
    type: String,
  },
});
itemSchema.pre("findOneAndUpdate", validateAtUpdate);

itemSchema.post("save", handleMongooseError);
itemSchema.post("findOneAndUpdate", handleMongooseError);
const Item = model("item", itemSchema);

export default Item;
