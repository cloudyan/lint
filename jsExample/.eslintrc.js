const path = require('path');

console.log(require.resolve(path.join(__dirname, '../', 'dist/eslint')));
module.exports = {
  extends: [require.resolve(path.join(__dirname, '../', 'dist/eslint'))],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    REACT_APP_ENV: true,
    page: true,
  },
  rules: {
    'object-curly-spacing': [
      'error',
      'always',
      {
        // arraysInObjects: false,
        // objectsInObjects: false,
      },
    ],
    'react/prop-types': 0,
    'react/display-name': 0,
  },
};
