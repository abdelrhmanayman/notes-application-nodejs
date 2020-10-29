const NoteDAL = require('../noteDAL');

module.exports = async (req, res, next) => {
  try {
    const { search } = req.query;
    const finder = { user: req.user._id };

    if (search)
      finder['$or'] = [{ title: { $regex: search, $options: 'i' } }, { text: { $regex: search, $options: 'i' } }];

    const userNotes = await NoteDAL.findAllNotes({ finder });
    res.status(200).json({ notes: userNotes });
  } catch (error) {
    next(error);
  }
};