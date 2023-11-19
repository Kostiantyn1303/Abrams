import { Schema, model } from "mongoose";
import { emailRegexp } from "../constants/user-constants.js";
import { handleMongooseError, validateAtUpdate } from "./hooks.js";
const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "Set your name for user"],
  },
  secondName: {
    type: String,
    required: [true, "Set your name for user"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: emailRegexp,
  },
  phone: {
    type: Number,
  },
});
userSchema.pre("findOneAndUpdate", validateAtUpdate);

userSchema.post("save", handleMongooseError);
userSchema.post("findOneAndUpdate", handleMongooseError);
const User = model("user", userSchema);

export default User;
