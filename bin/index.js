#!/usr/bin/env node

const { Command } = require('commander')
const pkg = require('../package.json')
const updateCheck = require('../lib/update')
const initLintConfig = require('../lib/init-lint-config')

// https://github.com/tj/commander.js/blob/HEAD/Readme_zh-CN.md
const program = new Command()
program.version(pkg.version, '-v, --version', 'output the current version')

program
  .command('update')
  .description('Check the @deepjs/lint version.')
  .action(() => {
    updateCheck()
  })

program
  .command('init')
  .description('Initial lint configuration.')
  .option('-t, --type', 'Project type')
  .action((options) => {
    initLintConfig()
  })

program
  .command('commitlint')
  .description('commit message lint')
  .action((options) => {
    console.log('cooklint commitlint')
  })

program.parse(process.argv)
