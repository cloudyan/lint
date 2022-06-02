// npm i -D @babel/eslint-parser eslint-config-airbnb-base

module.exports = {
  env: {
    // https://eslint.org/docs/user-guide/configuring/language-options
    browser: true,
    es2021: true,
    jest: true,
    jasmine: true,
    jquery: true,
    mocha: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
    },
  },
  // plugins: ['promise', 'eslint-comments'],
}
