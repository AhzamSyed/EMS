import Joi from "joi";

export const signupSchema = Joi.object({
  name: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Name is required",
    "string.min": "Name should have at least 3 characters",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Invalid email format",
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Password should have at least 6 characters",
  }),
});

export const verifyEmailSchema = Joi.object({
  code: Joi.string().length(6).required().messages({
    "string.length": "Verification code must be 6 digits",
  }),
});
