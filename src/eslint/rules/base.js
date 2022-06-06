
// npm i -D @babel/eslint-parser eslint-config-airbnb-base

// base config
module.exports = {
  root: true,
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
  // plugins: ['promise', 'eslint-comments', 'jest'],
}
