const UserDAL = require('../userDAL');

module.exports = async (req, res, next) => {
  try {
    const createdUser = await UserDAL.create({ user: req.body });
    res.status(200).json({ user: createdUser });
  } catch (error) {
    if (error.code === 11000)
      next({ message: 'user already exists', code: 409 });
    next(error);
  }
};