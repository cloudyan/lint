<!-- @format -->

# `@deepjs/lint`

基于 [@umijs/fabric](https://github.com/umijs/fabric) 修改

一个包含 prettier，eslint，stylelint 的配置文件合集

A collection of configuration files containing prettier, eslint, stylelint

# Use

安装

```bash
npm i @deepjs/lint --save-dev
yarn add @deepjs/lint -D

# lint 需要安装命令项 如 eslint prettier stylelint
npm run lint # 制作语法格式检查，不做修复
npm run lint:js
npm run lint:style
npm run lint:prettier
npm run lint:fix # 修复语法格式等
npm run lint:js:fix
npm run lint:style:fix
npm run lint:prettier:fix
```

in `.eslintrc.js`

```js
module.exports = {
  extends: [require.resolve('@deepjs/lint/dist/eslint')],

  // in antd-design-pro
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },

  rules: {
    // your rules
  },
};
```

in `.stylelintrc.js`

```js
module.exports = {
  extends: [require.resolve('@deepjs/lint/dist/stylelint')],
  rules: {
    // your rules
  },
};
```

in `.prettierrc.js`

```js
const lint = require('@deepjs/lint');

module.exports = {
  ...lint.prettier,
};
```
