// npm i -D eslint eslint-plugin-import @babel/eslint-parser eslint-config-airbnb eslint-config-prettier

module.exports = {
  extends: [
    require.resolve('./rules/base'),
    // require.resolve('./rules/react'),
    'airbnb',
    'prettier', // 需要放在 extends 最后，且去除所有后续的 rules
  ],
}
