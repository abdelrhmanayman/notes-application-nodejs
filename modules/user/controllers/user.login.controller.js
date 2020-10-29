const UserDAL = require('../userDAL');
const { compareHash } = require('../../../utils/helpers');
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await UserDAL.findUser({ finder: { username } });

    if (!user)
      return next({ message: 'invalid username or password', code: 400 });

    if (!await compareHash({ hash: user.password, string: password }))
      return next({ message: 'invalid username or password', code: 400 });

    const token = jwt.sign({ exp: Math.floor(Date.now() / 1000) + (60 * 60), data: user }, process.env.TOKEN_SECRET);
    res.status(200).json({ user, token });

  } catch (error) {
    next(error);
  }
};