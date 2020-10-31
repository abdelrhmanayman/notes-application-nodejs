const joi = require('joi');

module.exports = joi.object({
  imagePath: joi.string().required()
});