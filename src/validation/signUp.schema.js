const joi = require('joi');

const signUpSchema = joi.object({
  name: joi.string().alphanum().required(),
  email: joi.string().email().required(),
  password: joi.string().alphanum().min(5).required(),
});

module.exports = signUpSchema;
