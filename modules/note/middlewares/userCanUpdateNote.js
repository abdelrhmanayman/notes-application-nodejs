const NoteDAL = require('../noteDAL');

module.exports = async (req, res, next) => {
  const userID = req.user._id.toString();
  const { noteID } = req.body;
  const note = await NoteDAL.findNote({ finder: { _id: noteID } });

  if (!note)
    return next({ message: 'Note not found!', code: 404 });

  if (!(note.user === userID))
    return next({ message: 'You are not the owner of this note, Go mess with your notes, Please!', code: 401 });

  next();
};