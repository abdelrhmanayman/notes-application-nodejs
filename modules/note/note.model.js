const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
  title: { type: String, required: true, min: 1 },
  text: { type: String, min: 1, required: true },
  image: { type: String },
  user: { type: String, ref: 'User', required: true }
},
{
  toJSON: {
    transform (_, ret) {
      delete ret.__v;
      delete ret.updatedAt;
    }
  },
  timestamps: true
}
);

const noteModel = model('Note', noteSchema);

module.exports = noteModel;