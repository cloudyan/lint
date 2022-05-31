module.exports = {
  root: true,
  env: {
    // https://eslint.org/docs/user-guide/configuring/language-options
    browser: true,
    node: true,
    jest: true,
    es2021: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    babelOptions: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
      ],
    },
    requireConfigFile: false,
  },
  extends: [
    // npm i -D eslint-config-airbnb-base eslint-config-prettier
    // npm i -D @typescript-eslint/eslint-plugin eslint-plugin-react
    'airbnb-base', // 对应 eslint plugin-import
    'plugin:react/recommended',

    // https://github.com/jsx-eslint/eslint-plugin-react#configuration
    'plugin:react/jsx-runtime',
    // 'plugin:react-hooks/recommended', // eslint-plugin-react-hooks
    require.resolve('./eslint-custom'),
    'prettier', // 需要放在 extends 最后，且去除所有后续的 rules
  ],
  plugins: [
    // npm i -D eslint-plugin-react eslint-plugin-promise eslint-plugin-react-hooks
    'eslint-comments',
    // 'import',
    'react',
    // 'jsx-a11y', // 这个暂时不必要
    'promise',
    // 'jest',
    // 'unicorn', // 可强制约束文件命名格式，默认 kebabCase 格式
    'react-hooks',
    // 'markdown', // 和 markdownlint 冲突
  ],
  settings: {
    // support import modules from TypeScript files in JavaScript files
    // 'import/resolver': {
    //   node: {
    //     extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'], // : ['.js', '.jsx'],
    //   },
    // },
    // 'import/parsers': {
    //   '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    // },
    // // 'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
    // 'import/extensions': [
    //   'error',
    //   'ignorePackages',
    //   {
    //     js: 'never',
    //     jsx: 'never',
    //     ts: 'never',
    //     tsx: 'never',
    //   },
    // ],
    // 'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    // polyfills: ['fetch', 'Promise', 'URL', 'object-assign'],
  },
  // https://stackoverflow.com/questions/58510287/parseroptions-project-has-been-set-for-typescript-eslint-parser
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      // As mentioned in the comments, you should extend TypeScript plugins here,
      // instead of extending them outside the `overrides`.
      // If you don't want to extend any rules, you don't need an `extends` attribute.
      extends: [
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
      ],

      parser: '@typescript-eslint/parser',
      parserOptions: {
        babelOptions: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            ['@babel/plugin-proposal-class-properties', { loose: true }],
          ],
        },
        requireConfigFile: false,
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
  rules: {},
}
