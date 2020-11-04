const multer = require('multer');
const { getUploadPath, createImageID } = require('../utils/helpers');

const storage = multer.diskStorage({
  destination (req, file, cb) {
    cb(null, getUploadPath());
  },
  filename (req, file, cb) {
    cb(null, `${createImageID() }-${ Date.now()}.png`);
  }
});

const upload = multer({ storage });

module.exports = () => {
  return upload.single('avatar');
};