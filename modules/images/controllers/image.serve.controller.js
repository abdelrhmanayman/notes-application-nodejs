const { access } = require('fs').promises;

module.exports = async (req, res, next) => {
  try {
    const { imagePath } = req.params;

    await access(`./uploads/${imagePath}`);
    return res.sendFile(imagePath, { root: './uploads' });
  } catch (error) {
    next({ message: 'File Not Found', code: 404 });
  }
};