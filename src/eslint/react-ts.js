module.exports = {
  extends: [
    require.resolve('./rules/ts-base'),
    // require.resolve('./rules/react'),
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
}
