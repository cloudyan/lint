module.exports = {
  '*.{json,md,yml,yaml}': ['npm run prettier:fix'],
  '*.{js,jsx,ts,tsx}': ['npm run prettier:fix', 'npm run eslint:fix'],
  '*.{css,less,scss}': ['npm run prettier:fix', 'npm run stylelint:fix'],
}
