import * as path from 'path';
import * as fs from 'fs';
import jsEslintConfig from './eslint/eslint-js';
import tsEslintConfig from './eslint/eslint-ts';

const parserOptions = {
  // ecmaVersion: 'latest', // 2015 2020
  // sourceType: 'module', // 默认 script
  ecmaFeatures: {
    jsx: true,
  },
  babelOptions: {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
      // 此处顺序不能变，具体参看文档
      // https://babel.dev/docs/en/babel-plugin-proposal-decorators
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
    ],
  },
  requireConfigFile: false,
  project: './tsconfig.json',
};

const isJsMoreTs = async (path = 'src') => {
  // eslint-disable-next-line
  const fg = require('fast-glob');
  const jsFiles = await fg(`${path}/src/**/*.{js,jsx}`, { deep: 3 });
  const tsFiles = await fg(`${path}/src/**/*.{ts,tsx}`, { deep: 3 });
  return jsFiles.length > tsFiles.length;
};

const isTsProject = fs.existsSync(
  path.join(process.cwd() || '.', './tsconfig.json'),
);

console.log('isTsProject', isTsProject, path.join(process.cwd()));

if (isTsProject) {
  try {
    isJsMoreTs(process.cwd()).then((jsMoreTs) => {
      if (!jsMoreTs) return;
      // eslint-disable-next-line
      console.log('这是一个 TypeScript 项目，如果不是请删除 tsconfig.json');
    });
  } catch (e) {
    // eslint-disable-next-line
    console.log(e);
  }
}

// if (isTsProject) {
//   Object.assign(parserOptions, {
//   })
// }

module.exports = {
  parser: isTsProject ? '@typescript-eslint/parser' : '@babel/eslint-parser',
  extends: [
    'eslint-config-airbnb-base',
    'prettier',
    // 'prettier/react', // has been merged into "prettier" in eslint-config-prettier 8.0.0
  ].concat(
    isTsProject
      ? [
          // 'prettier/@typescript-eslint', // has been merged into "prettier" in eslint-config-prettier 8.0.0
          'plugin:@typescript-eslint/recommended',
        ]
      : ['plugin:react/recommended'],
  ),
  plugins: [
    'eslint-comments',
    // 'import', // 暂不开启
    'react',
    // 'jsx-a11y', // 这个暂时不必要
    // 'promise',
    'jest',
    'unicorn', // 可强制约束文件命名格式，默认 kebabCase 格式
    'react-hooks',
    'markdown', // 这个在 jsExample 报错，需要 .eslintrc.js 配置 root: true
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  globals: {
    // writable readonly off
  },
  rules: {
    ...(isTsProject ? tsEslintConfig : {}),
    ...jsEslintConfig,
  },
  settings: {
    // support import modules from TypeScript files in JavaScript files
    'import/resolver': {
      node: {
        extensions: isTsProject
          ? ['.js', '.jsx', '.ts', '.tsx', '.d.ts']
          : ['.js', '.jsx'],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    polyfills: ['fetch', 'Promise', 'URL', 'object-assign'],
  },
  parserOptions,
};
