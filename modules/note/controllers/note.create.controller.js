const NoteDAL = require('../noteDAL');

module.exports = async (req, res, next) => {
  try {
    const createdNote = await NoteDAL.create({ note: { ...req.body, user: req.user._id } });
    res.status(200).json({ note: createdNote });
  } catch (error) {
    console.log(error);
    next(error);
  }
};