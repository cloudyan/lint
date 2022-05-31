const eslint = require('../config/eslint')
const prettier = require('../config/prettier')
const stylelint = require('../config/stylelint')
const commitlint = require('../config/commitlint')
const browserslist = require('../config/browserslist')

module.exports = {
  eslint,
  prettier,
  stylelint,
  commitlint,
  browserslist,
  default: browserslist,
}
