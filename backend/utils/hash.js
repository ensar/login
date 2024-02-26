const bcryptjs = require('bcryptjs');
const hashToPassword = (pass) => {
  return bcryptjs.hashSync(pass, bcryptjs.genSaltSync());
};

module.exports = { hashToPassword };
