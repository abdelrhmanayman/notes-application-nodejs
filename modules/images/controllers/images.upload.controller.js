module.exports = (req, res, next) => {
  try {
    const { file } = req;
    if (!file) {
      const error = new Error({ message: 'Please upload a file', code: 400 });
      return next(error);
    }
    res.json(file);
  } catch (error) {

  }
};