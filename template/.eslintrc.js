module.exports = {
  root: true,
  extends: [require.resolve('@deepjs/lint/dist/eslint')],
  globals: {
    require: 'readonly',
  },
  rules: {
    // your rules
    // 'import/no-extraneous-dependencies': 0,
    // 'import/no-unresolved': 0,
  },
};
