const noteDAL = require('../noteDAL');

module.exports = async (req, res, next) => {
  try {
    const { noteID } = req.params;

    await noteDAL.deleteNote({ finder: { _id: noteID } });

    res.status(200).json({ type: 'Success' });
  } catch (error) {
    next(error);
  }
};