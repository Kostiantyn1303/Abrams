import Joi from "joi";
import { emailRegexp } from "../constants/user-constants.js";
const userAddSchema = Joi.object({
  firstName: Joi.string().required(),
  secondName: Joi.string().required(),

  email: Joi.string().pattern(emailRegexp).required(),
  phone: Joi.number().required(),
});

export default userAddSchema;
