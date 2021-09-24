/** @format */

// https://prettier.io/docs/en/options.html
module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  // 以上为改动，其他选项都使用默认值

  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
    {
      files: '*.{ejs,html}', // document.ejs
      options: {
        parser: 'html',
      },
    },
  ],
}
