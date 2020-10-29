const { Schema, model } = require('mongoose');
const { hashString } = require('../../utils/helpers');

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
},
{
  toJSON: {
    transform (_, ret) {
      delete ret.password;
      delete ret.__v;
      delete ret.updatedAt;
    }
  },
  timestamps: true
});

userSchema.pre('save', async function hashingPassword (next) {
  this.password = await hashString({ string: this.password });
  next();
});

const userModel = model('User', userSchema);

module.exports = userModel;