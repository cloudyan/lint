// https://stackoverflow.com/questions/58510287/parseroptions-project-has-been-set-for-typescript-eslint-parser

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
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    // requireConfigFile: false,
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      extraFileExtensions: ['.vue'],
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint'],
  // plugins: ['promise', 'eslint-comments'],
}
