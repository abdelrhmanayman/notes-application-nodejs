const bcrypt = require('bcryptjs');
const { saltRounds } = require('./constants');

function hashString ({ string }) {
  return bcrypt.hash(string, saltRounds);
}

function compareHash ({ string, hash }) {
  return bcrypt.compare(string, hash);
}

module.exports = {
  hashString,
  compareHash
};