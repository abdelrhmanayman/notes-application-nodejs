const bcrypt = require('bcryptjs');
const { saltRounds } = require('./constants');
const { v4: uuid } = require('uuid');
const path = require('path');

function createImageID () {
  return uuid();
}

function getUploadPath (imageID) {
  return path.join(__dirname, '../uploads');
}

function hashString ({ string }) {
  return bcrypt.hash(string, saltRounds);
}

function compareHash ({ string, hash }) {
  return bcrypt.compare(string, hash);
}

module.exports = {
  hashString,
  compareHash,
  createImageID,
  getUploadPath
};