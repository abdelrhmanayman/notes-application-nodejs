const joi = require('joi');

module.exports = joi.object({
  noteID: joi.string().required(),
  updates: joi.object({
    text: joi.string(),
    title: joi.string()
  }).required()
});