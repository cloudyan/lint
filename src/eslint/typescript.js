module.exports = {
  extends: [
    require.resolve('./rules/ts-base'),
    'airbnb-base',
    'airbnb-typescript/base',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
}
