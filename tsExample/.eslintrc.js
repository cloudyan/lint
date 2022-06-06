// const path = require('path');
// extends: [require.resolve(path.join(__dirname, '../', 'dist/eslint'))],

const { getEslintConfig } = require('../dist')

module.exports = getEslintConfig('react-ts')
