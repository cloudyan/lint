const path = require('path');

console.log(require.resolve(path.join(__dirname, '../', 'dist/eslint')));
module.exports = {
  root: true,
  extends: [require.resolve(path.join(__dirname, '../', 'dist/eslint'))],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    REACT_APP_ENV: true,
    page: true,
  },
  rules: {
    // your rules
    // 'unicorn/filename-case': 0,
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true, // foo-bar.js
          camelCase: true, // fooBar.js
          snakeCase: true, // foo_bar.js
          pascalCase: true, // FooBar.js
        },
        ignore: [
          // 不能匹配文件夹, 如 locales, 可配合 eslintignore 使用
          // /^zh-CN\.[j|t]s$/,
        ],
      },
    ],
  },
};
