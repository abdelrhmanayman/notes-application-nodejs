module.exports = ({ code = 500, message = 'Internal Server Error' }, req, res, next) => {
  res.status(code).json({ error: { message } });
  next();
};