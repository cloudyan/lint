/* eslint-disable prefer-object-spread */
/* eslint-disable global-require */
const prettier = require('./prettier')
const stylelint = require('./stylelint')
const commitlint = require('./commitlint')

const eslintConfig = {
  default: require('./eslint/index'),
  react: require('./eslint/react'),
  'react-ts': require('./eslint/react-ts'),
  typescript: require('./eslint/typescript'),
  // vue: require('./eslint/vue'),
  // 'vue-ts': require('./eslint/vue-ts'),
}

function getEslintConfig(type, userConfig) {
  const config = eslintConfig[type || 'default'] || eslintConfig.default;

  // prettier 需要放在 extends 最后，且去除所有后续的 rules
  config.extends = [].concat(config.extends || [], 'prettier')
  config.rules = Object.assign({}, config.rules, userConfig)

  return config
}

function getStylelintConfig(type, userConfig) {
  const config = stylelint;

  config.extends = [].concat(config.extends || [], 'stylelint-config-prettier')
  config.rules = Object.assign({}, config.rules, userConfig)

  return config
}

function getPrettierConfig(type, userConfig) {
  const config = prettier;

  return Object.assign({}, config, userConfig)
}

function getCommitlintConfig(type, userConfig) {
  const config = commitlint;

  return Object.assign({}, config, userConfig)
}

module.exports = {
  getEslintConfig,
  getStylelintConfig,
  getPrettierConfig,
  getCommitlintConfig,
}
