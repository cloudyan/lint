# eslint

规则太灵活了，反而导致选择比较困难，调研差别就需要很多的时间

我们这里以 [airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base#readme) 为基础来扩展实施规则详细。

- rules 内部规则集合
  1. base
  2. react
  3. vue
  4. ts-base
  5. ts-react
  6. ts-vue
- output 对外输出项目配置
  1. index (默认 js 项目，不包含 react 或 vue)
  2. react
  3. vue
  4. typescript
  5. react-ts
  6. vue-ts

参考的共享配置

- [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript)
- [create-exposed-app](https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js)

## install

```bash
# default 默认
npm i -D eslint eslint-plugin-import eslint-config-airbnb-base @babel/eslint-parser

# react (实际就是 airbnb)
```

config

```js
module.exports = {
  extends: [
    // default
    require.resolve('./rules/base'),
    'airbnb-base',
    'prettier', // 需要放在 extends 最后，且去除所有后续的 rules

    // react
    require.resolve('./rules/react'),
  ],
}
```

## usage

- `'prettier',` 需要放在 extends 最后，且去除所有后续的 rules

```js
// .eslintrc.js
module.exports = {
  extends: [
    // 默认 eslint:recommended eslint-plugin-import + @babel/eslint-parser
    '@deepjs/lint', // 默认 js 项目(使用 eslint)
    // '@deepjs/lint/react',          // react 项目
    // '@deepjs/lint/vue',            // vue 项目
    // '@deepjs/lint/typescript',     // typescript 项目
    // '@deepjs/lint/react-ts',       // react-ts 项目
    // '@deepjs/lint/vue-ts',         // vue-ts 项目
    // '@deepjs/lint/taro-react',     // taro-react 项目
    // '@deepjs/lint/taro-react-ts',  // taro-react-ts 项目
  ],
}
```

## 详细设计

通过组合继承，完成整体规则复用

- 所有规则都会在最后附加 prettier 规则

### index 默认配置

默认配置, 适用于 js 项目，不包含 react, vue 或 ts。

```bash
npm i -D xxx @babel/core @babel/eslint-parser eslint-plugin-import
```

### react 项目

继承默认配置, 附加 react 规则

- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- 可选 [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) 按需使用，默认不集成

```bash
npm i -D xxx @babel/core @babel/eslint-parser eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks

# 可选
npm i -D eslint-plugin-jsx-a11y
```

### vue 项目

继承默认配置, 附加 vue 配置

- 使用 [vue-eslint-parser](https://www.npmjs.com/package/vue-eslint-parser) 作为 parser
- 启用 [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue) 插件的规则

```bash
npm i -D xxx @babel/core @babel/eslint-parser eslint-plugin-import vue-eslint-parser eslint-plugin-vue
```

### typescript 项目

继承默认配置, 附加 ts 配置

- 使用 [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser) 作为 parser。
- 开启 [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) 插件的规则

```bash
npm i -D xxx @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript
```

需保证项目已安装 `typescript` 依赖，另外如果项目的 TS 配置文件不是 `./tsconfig.json`，则需要设置 `.eslintrc.js` 中的 [parserOptions.project](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject) 字段 ，例如：

```js
{
  "extends": "xxx/typescript",
  "parserOptions": {
    "project": "./tsconfig.eslint.json"
  }
}
```

### react-ts

继承 react 配置, 附加 ts 配置

```bash
npm i -D xxx @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript eslint-plugin-react eslint-plugin-react-hooks
```

### vue-ts

继承 vue 配置, 附加 ts 配置

```bash
npm i -D xxx @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript eslint-plugin-react eslint-plugin-react-hooks
```

### taro-react

继承 taro/react, react 配置

- 继承 `eslint-config-taro`
- 依赖 `babel-preset-taro`

```bash
npm i -D xxx eslint-config-taro eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks
```

### taro-react-ts

继承 taro-react 配置, 附加 ts 配置

```bash
npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-taro eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks
```

taro 相关的都是如此，底层继承为 `eslint-config-taro`, 附加对应的 react 或 vue 以及 ts 相关配置。
