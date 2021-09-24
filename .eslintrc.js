const path = require('path');

// console.log(require.resolve(path.join(__dirname, './', 'dist/eslint')));
module.exports = {
  root: true, // js 项目检测需要配置此项
  extends: [require.resolve(path.join(__dirname, './', 'dist/eslint'))],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },
  rules: {
    // 'object-curly-spacing': [
    //   'error',
    //   'always',
    //   {
    //     // arraysInObjects: false,
    //     // objectsInObjects: false,
    //   },
    // ],
    // semi: ['error', 'always'], // always/never 可按需使用
  },
};
