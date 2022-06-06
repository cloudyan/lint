module.exports = {
  extends: [
    require.resolve('./index'),
    require.resolve('./rules/typescript'),
    // 'airbnb-base',
    // 'airbnb-typescript/base',
    // 'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
}
