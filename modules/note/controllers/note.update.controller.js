const NoteDAL = require('../noteDAL');

module.exports = async (req, res, next) => {
  try {
    const { noteID: _id, updates } = req.body;

    await NoteDAL.updateNote({ finder: { _id }, updates });

    res.sendStatus(200);

  } catch (error) {
    next(error);
  }
};