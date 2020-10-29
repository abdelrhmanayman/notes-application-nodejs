const joi = require('joi');

module.exports = joi.object({
  noteID: joi.string().required()
});