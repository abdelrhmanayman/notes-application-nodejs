const joi = require('joi');

module.exports = joi.object({
  text: joi.string().required(),
  image: joi.string(),
  title: joi.string().required()
});