const jwt = require('jsonwebtoken');

const createAccessToken = (body) => {
  return jwt.sign(body, process.env.ASECRETKEY, { expiresIn: '1h' });
};

const createRefreshToken = (body) => {
  return jwt.sign(body, process.env.RSECRETKEY);
};

module.exports = { createAccessToken, createRefreshToken };
