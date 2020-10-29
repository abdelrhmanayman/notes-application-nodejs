const noteDAL = require('../noteDAL');

module.exports = async (req, res, next) => {
  try {
    const { noteID } = req.body;

    await noteDAL.deleteNote({ finder: { _id: noteID } });

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};