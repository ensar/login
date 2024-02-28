const bcryptjs = require('bcryptjs');

const hashToPassword = (pass) => {
  return bcryptjs.hashSync(pass, bcryptjs.genSaltSync(10), (err) => {
    if (err) {
      return false;
    }
  });
};

const comparePassword = (pass, hash) => {
  return bcryptjs.compareSync(pass, hash, (err) => {
    if (err) {
      return false;
    }
  });
};

module.exports = { hashToPassword, comparePassword };
