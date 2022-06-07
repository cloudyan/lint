#!/usr/bin/env node

const { Command } = require('commander')
const pkg = require('../package.json')
const updateCheck = require('../lib/update')
const init = require('../lib/init')

// https://github.com/tj/commander.js/blob/HEAD/Readme_zh-CN.md
const program = new Command()
program.version(pkg.version, '-v, --version', 'output the current version').description('数禾前端 lint 工具')

program
  .command('update')
  .description('Check the @deepjs/lint version.')
  .action(() => {
    updateCheck()
  })

program
  .command('init')
  .description('Initial lint configuration.')
  // .option('-f, --force', 'Force override')
  .action((options) => {
    // 默认强制模式
    Object.assign(options, { force: true })
    init(options)
  })

program
  .command('commitlint')
  .description('commit message lint')
  .action(() => {
    console.log('cooklint commitlint')
  })

program.parse(process.argv)
