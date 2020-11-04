const NoteDAL = require('../noteDAL');

module.exports = async (req, res, next) => {
  try {
    const { noteID: _id, updates } = req.body;

    await NoteDAL.updateNote({ finder: { _id }, updates });

    res.status(200).json({ type: 'Success' });

  } catch (error) {
    next(error);
  }
};