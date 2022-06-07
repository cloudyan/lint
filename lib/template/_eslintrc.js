// .eslintrc.js
const { getEslintConfig } = require('@deepjs/lint')

// type EslintConfig: undefined | 'react' | 'react-ts' | 'typescript'
module.exports = getEslintConfig('{{type}}')
