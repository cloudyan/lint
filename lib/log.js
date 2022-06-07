const chalk = require('chalk')

const { green, blue, yellow, red } = chalk

module.exports = {
  success(...args) {
    console.log(green(...args))
  },
  info(...args) {
    console.info(blue(...args))
  },
  warn(...args) {
    console.info(yellow(...args))
  },
  error(...args) {
    console.error(red(...args))
  },
}
