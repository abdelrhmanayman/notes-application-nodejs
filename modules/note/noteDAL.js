const noteModel = require('./note.model');

class NoteDAL {

  create ({ note }) {
    return noteModel.create(note);
  }

  updateNote ({ finder, updates }) {
    return noteModel.updateOne(finder, { $set: updates });
  }

  updateManyNotes ({ finder, updates }) {
    return noteModel.updateMany(finder, { $set: updates });
  }

  findNote ({ finder, selection }) {
    return noteModel.findOne(finder, selection);
  }

  findAllNotes ({ finder, selection }) {
    return noteModel.find(finder, selection);
  }

  deleteNote ({ finder }) {
    return noteModel.deleteOne(finder);
  }
}

module.exports = new NoteDAL();