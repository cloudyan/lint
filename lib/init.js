// const fs = require('fs')
const path = require('path')
const fse = require('fs-extra')
const enquirer = require('enquirer')
const { findPackageJson, adapterConfig, getDeps, askInstallModules, renameFiles } = require('./utils')
const log = require('./log')

// 1. 获取配置信息
// 2. 生成配置文件

async function getConfig() {
  return enquirer.prompt([
    {
      type: 'select',
      name: 'framework',
      message: 'Which framework does your project use?',
      initial: 0,
      choices: [
        { message: 'React', name: 'react' },
        { message: 'Vue.js', name: 'vue' },
        { message: 'None of these', name: 'default' },
      ],
    },
    {
      type: 'select',
      name: 'platform',
      message: 'Where does your code run?',
      initial: 0,
      choices: [
        { message: 'mobile 移动端', name: 'mobile' },
        { message: 'desktop 电脑端', name: 'desktop' },
        { message: 'None of these', name: '' },
      ],
    },
    {
      type: 'toggle',
      name: 'typescript',
      message: 'Does your project use TypeScript?',
      enabled: 'Yes',
      disabled: 'No',
      initial: 1,
    },
    // {
    //   type: 'multiselect',
    //   name: 'lintType',
    //   message: 'Where does your code run?',
    //   initial: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    //   choices: [
    //     { message: 'prettier', name: 'prettier' },
    //     { message: 'eslint', name: 'eslint' },
    //     { message: 'stylelint', name: 'stylelint' },
    //     { message: 'commitlint', name: 'commitlint' },
    //     { message: 'browserslist', name: 'browserslist' },
    //     { message: 'lint-staged', name: 'lint-staged' },
    //     { message: 'husky', name: 'husky' },
    //     { message: 'vscode-setting', name: 'vscode' }, // 默认包含
    //     { message: 'changelog', name: 'changelog' },
    //     { message: 'None of these', name: 'none' },
    //   ],
    // },
  ])
}

function checkPackageJson(options) {
  const packageJsonExists = findPackageJson(options)

  if (!packageJsonExists) {
    throw new Error(
      'A package.json file is necessary to initialize cooklint. Run `npm init` to create a package.json file and try again.',
    )
  }
  return packageJsonExists
}

function updatePackage(options) {
  const pkgPath = checkPackageJson(options)
  const pkg = fse.readJSONSync(pkgPath)

  if (!pkg.scripts) {
    pkg.scripts = {}
  }

  // add scripts
  Object.assign(pkg.scripts, {
    changelog: 'conventional-changelog -p angular -i CHANGELOG.md -s -r 0',
    eslint: 'cross-env TIMING=1 eslint --ext .js,.jsx,.ts,.tsx --format=pretty ./src',
    'eslint:fix': 'npm run eslint -- --fix',
    'eslint:report': 'npm run eslint -- --format json --output-file ./eslint-report.json',
    'lint-staged': 'lint-staged',
    prepare: 'husky install',
    prettier: 'prettier . --check',
    'prettier:fix': 'npm run prettier -- --write',
    stylelint: "stylelint --allow-empty-input 'src/**/*.{css,less,scss}'",
    'stylelint:fix': 'npm run stylelint -- --fix',
  })

  // add lint-staged
  Object.assign(pkg, {
    'lint-staged': {
      '*.{json,md,yml,yaml}': ['npm run prettier:fix'],
      'src/**/*.{js,jsx,ts,tsx}': ['npm run prettier:fix', 'npm run eslint:fix'],
      '*.{css,less,scss}': ['npm run prettier:fix', 'npm run stylelint:fix'],
    },
  })

  // add browserslist
  Object.assign(pkg, {
    browserslist: ['defaults', 'last 2 versions', '> 0.1%', 'ios >= 9', 'android >= 4.4'],
  })

  // 执行完最好排个序 `npx sort-package-json`
  fse.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))
}

function generateConfig(options, config) {
  // 不同框架，只有 eslint 配置不同，其他配置都一样
  const templateDir = path.resolve(__dirname, './template')
  const targetDir = path.resolve(options.cwd || process.cwd())

  const write = (file, content) => {
    const targetPath = renameFiles[file] ? path.join(targetDir, renameFiles[file]) : path.join(targetDir, file)
    if (content) {
      fse.writeFileSync(targetPath, content)
    } else {
      fse.copySync(path.join(templateDir, file), targetPath, { overwrite: !!options.force })
    }
  }

  const files = fse.readdirSync(templateDir)
  // eslint-disable-next-line no-restricted-syntax
  for (const file of files) {
    if (file === '_eslintrc.js') {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      let eslintConfig = fse.readFileSync(path.join(templateDir, file), 'utf8')
      eslintConfig = eslintConfig.replace('{{type}}', config.eslintConfigType)
      write(file, eslintConfig)
    } else {
      write(file)
    }
  }
}

async function writeConfig(options, config) {
  // log.info('config', config, options)

  // 2.1 更新 package.json 中配置
  updatePackage(options, config)

  // 2.2 生成 .xxxrc.js 配置信息
  generateConfig(options, config)

  // 2.3 添加 husky 配置
}

function initConfig(options) {
  checkPackageJson()

  return getConfig().then((answers) => {
    // 目前全量生成配置
    Object.assign(answers, {
      lintType: [
        'prettier',
        'eslint',
        'stylelint',
        'commitlint',
        'browserslist',
        'lint-staged',
        'husky',
        'vscode',
        'changelog',
      ],
    })
    const config = adapterConfig(answers)
    // return writeConfig(config)

    // 此处可以控制安装依赖
    const deps = getDeps(answers)
    return askInstallModules(deps).then(() => writeConfig(options, config))
  })
}

module.exports = initConfig
