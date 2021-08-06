const lint = require('../dist/index');

module.exports = {
  ...lint.prettier,
  semi: true,
};
