// npm i -D eslint eslint-plugin-import @babel/eslint-parser eslint-config-airbnb-base eslint-config-prettier

// default config
module.exports = {
  extends: [
    require.resolve('./rules/base'),
    'airbnb-base',
    // 'prettier', // 需要放在 extends 最后，且去除所有后续的 rules
  ],
}
