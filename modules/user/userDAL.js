const userModel = require('./user.model');

class UserDAL {

  create ({ user }) {
    return userModel.create(user);
  }

  updateUser ({ finder, updates }) {
    return userModel.updateOne(finder, { $set: updates });
  }

  updateManyUsers ({ finder, updates }) {
    return userModel.updateMany(finder, { $set: updates });
  }

  findUser ({ finder, selection }) {
    return userModel.findOne(finder, selection);
  }

  findAllUsers ({ selection }) {
    return userModel.find({}, selection);
  }

  deleteUser ({ finder }) {
    return userModel.deleteOne(finder);
  }

  async isUserExists ({ finder }) {
    const user = await userModel.find({ finder });
    return !!user;
  }
}

module.exports = new UserDAL();