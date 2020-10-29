const joi = require('joi');

module.exports = joi.object({
  username: joi.string().required(),
  email: joi.string().email().required(),
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  password: joi.string().required().min(6)
});