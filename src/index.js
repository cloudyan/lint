/* eslint-disable global-require */
const prettier = require('./prettier')
const stylelint = require('./stylelint')
const commitlint = require('./commitlint')
const browserslist = require('./browserslist')
const lintstaged = require('./lint-staged')

const eslintConfig = {
  default: require('./eslint'),
  react: require('./eslint/react'),
  typescript: require('./eslint/typescript'),
  'react-ts': require('./eslint/react-ts'),
}

function getEslintConfig(type) {
  return eslintConfig[type || 'default'] || eslintConfig.default
}

module.exports = {
  getEslintConfig,
  eslint: eslintConfig.default,
  prettier,
  stylelint,
  commitlint,
  browserslist,
  lintstaged,
  default: browserslist,
}
