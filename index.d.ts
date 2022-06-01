import eslint = require('./dist/eslint')
import prettier = require('./dist/prettier')
import stylelint = require('./dist/stylelint')
import commitlint = require('./dist/commitlint')
import browserslist = require('./dist/browserslist')
import lintstaged = require('./dist/lint-staged')

export { eslint, prettier, stylelint, commitlint, browserslist, lintstaged, browserslist as default }
