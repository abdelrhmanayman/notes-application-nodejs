const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token)
    return next({ message: 'No token!', code: 401 });

  const { data: user } = jwt.verify(token.split(' ')[1], process.env.TOKEN_SECRET);

  req.user = user;
  next();
};