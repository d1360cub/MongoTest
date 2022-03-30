const jwt = require('jsonwebtoken');

const { getUserByEmail } = require('../api/user/user.service');

function signToken(payload) {
  const token = jwt.sign(payload, 'secretWord', {expiresIn:'2h'});
  return token;
}

module.exports = {
  signToken,
};

async function validateToken(token) {
  try {
    const payload = await jwt.verify(token, 'secretWord');
    return payload;
  } catch (error) {
    return null;
  }
}