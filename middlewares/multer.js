const multer = require('multer');

const upload = multer();

module.exports = (files) => {
  return upload.fields(files);
};