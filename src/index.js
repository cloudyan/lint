const eslint = require('./eslint')
const prettier = require('./prettier')
const stylelint = require('./stylelint')
const commitlint = require('./commitlint')
const browserslist = require('./browserslist')
const lintstaged = require('./lint-staged')

module.exports = {
  eslint,
  prettier,
  stylelint,
  commitlint,
  browserslist,
  lintstaged,
  default: browserslist,
}
