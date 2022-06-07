const path = require('path')
const fs = require('fs')
const enquirer = require('enquirer')
const spawn = require('cross-spawn')
const log = require('./log')

const depsMap = {
  prettier: 'prettier',
  eslint: 'eslint',
  stylelint: 'stylelint',
  commitlint: '@commitlint/cli',
  'lint-staged': 'lint-staged',
  husky: 'husky',
  // changelog: 'conventional-changelog-cli', // 是否可以用 npx，就不用安装依赖了
  vscode: [], // 无需安装依赖
  browserslist: [], // 无需安装依赖
}

exports.renameFiles = {
  _editorconfig: '.editorconfig',
  _prettierignore: '.prettierignore',
  _eslintignore: '.eslintignore',
  _stylelintignore: '.stylelintignore',
  '_prettierrc.js': '.prettierrc.js',
  '_eslintrc.js': '.eslintrc.js',
  '_stylelintrc.js': '.stylelintrc.js',
  '_commitlintrc.js': '.commitlintrc.js',
}

exports.getDeps = function getDeps(answers) {
  // log.info(deps)
  // husky 安装后还需要执行 husky install
  return (answers.lintType || []).reduce((arr, item) => arr.concat(depsMap[item] || []), [])
}

exports.adapterConfig = function adapterConfig(config) {
  let eslintConfigType = config.framework
  if (eslintConfigType === 'default') {
    if (config.typescript) eslintConfigType = 'typescript'
  } else if (config.typescript) {
    eslintConfigType += '-ts'
  }

  Object.assign(config, { eslintConfigType })
  return config
}

function installSyncSaveDev(packages, packageManager = 'npm') {
  const packageList = Array.isArray(packages) ? packages : [packages]
  const installCmd = packageManager === 'yarn' ? 'add' : 'install'
  const installProcess = spawn.sync(packageManager, [installCmd, '-D'].concat(packageList), { stdio: 'inherit' })
  const { error } = installProcess

  if (error && error.code === 'ENOENT') {
    const pluralS = packageList.length > 1 ? 's' : ''

    log.error(
      `Could not execute ${packageManager}. Please install the following package${pluralS} with a package manager of your choice: ${packageList.join(
        ', ',
      )}`,
    )
  }
}

function installModules(modules, packageManager) {
  log.info(`Installing ${modules.join(', ')}`)
  installSyncSaveDev(modules, packageManager)
}

exports.findPackageJson = function findPackageJson(options = {}) {
  const cwd = options.cwd || process.cwd()
  const pkgPath = path.resolve(cwd, 'package.json')

  if (fs.existsSync(pkgPath) && fs.statSync(pkgPath).isFile()) {
    return pkgPath
  }
  return null
}

exports.askInstallModules = function askInstallModules(modules) {
  // If no modules, do nothing.
  if (modules.length === 0) {
    return Promise.resolve()
  }

  log.info("\nThe config that you've selected requires the following dependencies:")
  log.warn([''].concat(modules).join('\n  '))
  log.info('\n')
  return enquirer
    .prompt([
      {
        type: 'toggle',
        name: 'executeInstallation',
        message: 'Would you like to install them now?',
        enabled: 'Yes',
        disabled: 'No',
        initial: 0,
        skip() {
          return !modules.length
        },
        result(input) {
          return this.skipped ? null : input
        },
      },
      {
        type: 'select',
        name: 'packageManager',
        message: 'Which package manager do you want to use?',
        initial: 0,
        choices: ['npm', 'yarn', 'pnpm'],
        skip() {
          return !this.state.answers.executeInstallation
        },
      },
    ])
    .then(({ executeInstallation, packageManager }) => {
      if (executeInstallation) {
        installModules(modules, packageManager)
      }
    })
}
