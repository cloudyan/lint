# eslint

规则太灵活了，反而导致选择比较困难，调研差别就需要很多的时间

我们这里以 [airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base#readme) 为基础来扩展实施规则详细。

1. base
2. react
3. vue
4. ts-base
5. ts-react
6. ts-vue

- [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript)
- [create-exposed-app](https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js)

## install

```bash
# default 默认
npm i -D eslint eslint-plugin-import eslint-config-airbnb-base @babel/eslint-parser

# react (实际就是 airbnb)


```

## usage

```js
// .eslintrc.js
module.exports = {
  extends: [
    // 默认 eslint:recommended eslint-plugin-import + @babel/eslint-parser
    '@deepjs/lint', // 默认 js 项目(使用 eslint)
    // '@deepjs/lint/react',          // react 项目
    // '@deepjs/lint/react-ts',       // react-ts 项目
    // '@deepjs/lint/vue',            // vue 项目
    // '@deepjs/lint/taro-react',     // taro-react 项目
    // '@deepjs/lint/taro-react-ts',  // taro-react-ts 项目
  ],
}
```
