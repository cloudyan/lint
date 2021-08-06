import * as path from 'path';
import * as fs from 'fs';
import tsEslintConfig from './tsEslintConfig';

const isTsProject = fs.existsSync(path.join(process.cwd() || '.', './tsconfig.json'));
console.log('isTsProject', isTsProject, path.join(process.cwd()));
const isJsMoreTs = async (path2 = 'src') => {
  // eslint-disable-next-line
  const fg = require('fast-glob');
  const jsFiles = await fg(`${path2}/src/**/*.{js,jsx}`, { deep: 3 });
  const tsFiles = await fg(`${path2}/src/**/*.{ts,tsx}`, { deep: 3 });
  return jsFiles.length > tsFiles.length;
};

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

const parserOptions = {
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
  ].concat(isTsProject ? [
    // 'prettier/@typescript-eslint', // has been merged into "prettier" in eslint-config-prettier 8.0.0
    'plugin:@typescript-eslint/recommended',
  ] : [
    'plugin:react/recommended',
  ]),
  plugins: [
    'eslint-comments',
    // 'import', // 暂不开启
    'react',
    // 'jsx-a11y', // 这个暂时不必要
    // 'promise',
    'jest',
    'unicorn',
    'react-hooks',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  rules: {
    // 'react/display-name': 0,
    // 'react/jsx-props-no-spreading': 0,
    // 'react/state-in-constructor': 0,
    // 'react/static-property-placement': 0,
    // // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    // 'react/destructuring-assignment': 'off',
    // 'react/jsx-filename-extension': 'off',
    // 'react/no-array-index-key': 'warn',
    // 'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    // 'react-hooks/exhaustive-deps': 'warn', // Checks deps of Hooks
    // 'react/require-default-props': 0,
    // 'react/jsx-fragments': 0,
    // 'react/jsx-wrap-multilines': 0,
    // 'react/prop-types': 0,
    // 'react/forbid-prop-types': 0,
    // 'react/sort-comp': 0,
    // 'react/react-in-jsx-scope': 0,
    // 'react/jsx-one-expression-per-line': 0,
    // 'generator-star-spacing': 0,
    // // 'function-paren-newline': 0,
    'import/no-unresolved': 0,
    'import/order': 'error',
    'import/no-named-as-default': 0,
    'import/no-cycle': 0,
    'import/prefer-default-export': 0,
    'import/no-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'import/named': 0,
    'import/no-named-as-default-member': 0,
    'import/no-duplicates': 0,
    'import/no-self-import': 0,
    'import/extensions': 0,
    'import/no-useless-path-segments': 0,
    // 'jsx-a11y/no-noninteractive-element-interactions': 0,
    // 'jsx-a11y/click-events-have-key-events': 0,
    // 'jsx-a11y/no-static-element-interactions': 0,
    // 'jsx-a11y/anchor-is-valid': 0,
    // 'sort-imports': 0,
    // 'class-methods-use-this': 0,
    // 'no-confusing-arrow': 0,
    // 'linebreak-style': 0,
    // // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    // 'no-prototype-builtins': 'off',
    // 'unicorn/prevent-abbreviations': 'off',
    // // Conflict with prettier
    // 'arrow-body-style': 0,
    // 'arrow-parens': 0,
    // 'object-curly-newline': 0,
    // 'implicit-arrow-linebreak': 0,
    // 'operator-linebreak': 0,
    // 'eslint-comments/no-unlimited-disable': 0,
    // 'no-param-reassign': 2,
    // 'space-before-function-paren': 0,
    'no-restricted-imports': [
      'error',
      {
        'patterns': [
          {
            'group': [
              '*/.umi/*',
            ],
          },
        ],
      },
    ],
    ...(isTsProject ? tsEslintConfig : {}),

    // mine: off warn error
    'array-bracket-spacing': 'error',
    'arrow-body-style': 'off',
    // 'arrow-body-style': ['error', 'as-needed', {
    //   'requireReturnForObjectLiteral': true,
    // }],
    'consistent-return': 'off',
    'comma-dangle': [
      'error',
      {
        // before: false,
        // after: true,
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'comma-spacing': 'error',
    'func-names': 'off',
    'no-bitwise': 'off',
    'no-continue': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-else-return': 'off',
    'no-inner-declarations': 'warn',
    'no-lonely-if': 'off', // 不使用 else if，也能使代码比较清晰
    'no-mixed-operators': 'off',
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 1,
      },
    ],
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': [
      'off',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-restricted-syntax': 'off',
    'no-shadow': 'off',

    // 'no-shadow': [
    //   'error',
    //   {
    //     allow: [
    //       'res',
    //       'data',
    //       'err',
    //       'cb',
    //       'callback',
    //       'props',
    //       'state',
    //       'resolve',
    //       'reject',
    //       'done',
    //     ],
    //   },
    // ],
    'no-trailing-spaces': 'off',
    'no-underscore-dangle': 'off',
    // 'no-unused-expressions': [
    //   'error',
    //   {
    //     allowShortCircuit: true,
    //     allowTernary: true,
    //     allowTaggedTemplates: true,
    //   },
    // ],
    'no-unused-vars': 'off',
    // 'no-unused-vars': [
    //   'error',
    //   {
    //     vars: 'all',
    //     // args: 'after-used',
    //     args: 'none',
    //     caughtErrors: 'none',
    //     ignoreRestSiblings: true,
    //   },
    // ],
    'no-use-before-define': 'off',
    'no-useless-escape': 'off',
    'object-curly-spacing': ['error', 'always', {
      arraysInObjects: false,
      objectsInObjects: false,
    }],
    'prefer-template': 'off',
    'prefer-arrow-callback': 'off',
    'quotes': ['error', 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true,
    }],
    'quote-props': ['error', 'as-needed'],
    'require-yield': [1],
    semi: ['error', 'never'], // always/never 可按需使用
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'ignore',
        asyncArrow: 'ignore',
      },
    ],
  },
  settings: {
    // support import modules from TypeScript files in JavaScript files
    'import/resolver': {
      node: {
        extensions: isTsProject ?
        ['.js', '.jsx', '.ts', '.tsx', '.d.ts'] :
        ['.js', '.jsx'],
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
