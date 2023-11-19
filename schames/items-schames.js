import Joi from "joi";

const itemsAddSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "missing required name field",
    "string.empty": "name cannot be empty",
  }),

  image: Joi.string().required().messages({
    "any.required": "missing required email field",
    "string.empty": "image cannot be empty",
  }),
  imageBig: Joi.string().required().messages({
    "any.required": "missing required email field",
    "string.empty": "image cannot be empty",
  }),
  price: Joi.string().required().messages({
    "any.required": "missing required phone field",
    "string.empty": "price cannot be empty",
  }),
  description: Joi.string().required().messages({
    "any.required": "missing required phone field",
    "string.empty": "description cannot be empty",
  }),
});

export default  itemsAddSchema ;
