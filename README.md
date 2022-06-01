# `@deepjs/lint`

> 一个包含 prettier，eslint，stylelint 的配置文件合集。
>
> 基于 [@umijs/fabric](https://github.com/umijs/fabric) 修改。1.x 版本后 Break Change, 后续会另适配测试用例

## Usage

将 lint 配置及依赖提取，通过一个 npm 包统一管理。

### 一键生成

```bash
npx lint --init
```

### 手动操作

```bash
npm i --save-dev @deepjs/lint eslint stylelint prettier @commitlint/cli husky lint-staged cross-env

# 不需要再安装其他 Lint 插件或者插件集等依赖，@deepjs/lint 中已包含这部分依赖。
```

配置文件使用如下

相关 ignore 文件, 自行按需配置 `.eslintignore`, `.prettierignore`, `.stylelintignore`

```js
// .prettierrc.js
const { prettier } = require('@deepjs/lint')
module.exports = prettier


// .eslintrc.js
// eslintVue eslintReact eslintReactTs
const { eslint } = require('@deepjs/lint')
module.exports = eslint


// .stylelint.js
const { stylelint } = require('@deepjs/lint')
module.exports = stylelint


// .commitlintrc.js
const { commitlint } = require('@deepjs/lint')
module.exports = commitlint


// browserslist h5/pc/mini
{
  "browserslist": [
    "extends @deepjs/lint"
  ]
}
```

配置 package.json

```jsonc
{
  "scripts": {
    "eslint": "cross-env TIMING=1 eslint --ext .js,.jsx,.ts,.tsx --format=pretty ./src",
    "eslint:fix": "npm run eslint -- --fix",
    "eslint:report": "npm run eslint -- --format json --output-file ./eslint-report.json",
    "lint-staged": "lint-staged",
    "prepare": "husky install",
    "prettier": "prettier . --check",
    "prettier:diff": "npm run prettier:fix && git --no-pager diff && git checkout -- .",
    "prettier:fix": "npm run prettier -- --write",
    "stylelint": "stylelint --allow-empty-input 'src/**/*.{css,less,scss,sass}'",
    "stylelint:fix": "npm run stylelint -- --fix"
  },
  "lint-staged": {
    "*.{json,md,yml,yaml}": ["npm run prettier:fix"],
    "*.{js,jsx,ts,tsx}": ["npm run prettier:fix", "npm run eslint:fix"],
    "*.{css,less,scss}": ["npm run prettier:fix", "npm run stylelint:fix"]
  }
}
```

## Todo

实现自定义命令行，完成代码配置以及检查，并输出结果

- 跟随项目
  - [ ] lint init 完成配置初始化（配置跟随项目走）
- 统一命令行控制
- [ ] lint --check 执行代码格式化检查
- [ ] lint --fix 执行代码格式化自动修复
- [ ] lint --doctor 配置检查
