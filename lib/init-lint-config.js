const { exec, spawn } = require('node:child_process')

function doExec(command, tip = '操作完成') {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`)
      return
    }
    console.log(`stdout: ${stdout}`)
    console.error(`stderr: ${stderr}`)
    console.log(`操作完成`)
  })
}

// 1. 初始化 lint 配置文件
// 2. 修改 package.json 配置
// 3. 添加 husky hooks
function initLintConfig() {
  // addConfigFiles()
  // updatePackageJson()
  addHuskyHooks()
}

function addConfigFiles() {
  // doExec(`npx degit cloudyan/lint/template#feat/lint ./ -f`)
}

function updatePackageJson() {
  // 添加 scripts

  const addScript = `npm set-script "eslint" "cross-env TIMING=1 eslint --ext .js,.jsx,.ts,.tsx --format=pretty ./src"
  npm set-script "eslint:fix" "npm run eslint -- --fix"
  npm set-script "eslint:report" "npm run eslint -- --format json --output-file ./eslint-report.json"
  npm set-script "lint-staged" "lint-staged --allow-empty"
  npm set-script "prettier" "prettier . --check"
  npm set-script "prettier:fix" "npm run prettier -- --write"
  npm set-script "prettier:diff" "npm run prettier:fix && git --no-pager diff && git checkout -- ."
  npm set-script "stylelint" "stylelint --allow-empty-input 'src/**/*.{css,less,scss,sass}'"
  npm set-script "stylelint:fix" "npm run stylelint -- --fix"

  npm set-script "prepare" "husky install"
  npx sort-package-json`

  // addLintStaged

  // npm set-script "changelog" "conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md"
  const testScript = `npm set-script "t_1" "echo 123"
    npm set-script "ttt" "echo ttt"
  `
  doExec(addScript)
}

function addHuskyHooks() {
  const addHusky = `# add hook pre-commit
npx husky add .husky/pre-commit "npx --no -- lint-staged"

# Add hook commit-msg
cat <<EEE > .husky/commit-msg
#!/bin/sh
. "\$(dirname "\$0")/_/husky.sh"

npx --no -- commitlint --edit "\${1}"
EEE`

  doExec(`
cat <<EEE > .husky/commit-msg
#!/bin/sh
. "\$(dirname "\$0")/_/husky.sh"

npx --no -- commitlint --edit "\${1}"
EEE`)
}

module.exports = initLintConfig
