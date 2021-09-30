/** @format */

const strictEslint = require('./eslint');
const softyEslint = require('./softy-eslint');
const stylelint = require('./stylelint');
const prettier = require('./prettier');

module.exports = {
  stylelint,
  prettier,
  strictEslint,
  eslint: softyEslint,
  default: softyEslint,
};
