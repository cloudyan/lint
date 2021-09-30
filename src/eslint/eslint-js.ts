export default {
  'import/extensions': 'off',
  'import/named': 'off',
  'import/no-cycle': 'off',
  'import/no-default-export': 'off',
  'import/no-duplicates': 'off',
  'import/no-extraneous-dependencies': 'off',
  'import/no-named-as-default': 'off',
  'import/no-named-as-default-member': 'off',
  'import/no-named-default': 'off',
  'import/no-self-import': 'off',
  'import/no-unresolved': 'off',
  'import/no-useless-path-segments': 'off',
  'import/order': 'error',
  'import/prefer-default-export': 'off',
  // 'jsx-a11y/no-noninteractive-element-interactions': 'off',
  // 'jsx-a11y/click-events-have-key-events': 'off',
  // 'jsx-a11y/no-static-element-interactions': 'off',
  // 'jsx-a11y/anchor-is-valid': 'off',
  'react/display-name': 'off',
  'react/prop-types': 'off',
  // 'react/jsx-props-no-spreading': 'off',
  // 'react/state-in-constructor': 'off',
  // 'react/static-property-placement': 'off',
  // // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
  // 'react/destructuring-assignment': 'off',
  // 'react/jsx-filename-extension': 'off',
  // 'react/no-array-index-key': 'warn',
  // 'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
  // 'react-hooks/exhaustive-deps': 'warn', // Checks deps of Hooks
  // 'react/require-default-props': 'off',
  // 'react/jsx-fragments': 'off',
  // 'react/jsx-wrap-multilines': 'off',
  // 'react/forbid-prop-types': 'off',
  // 'react/sort-comp': 'off',
  // 'react/react-in-jsx-scope': 'off',
  // 'react/jsx-one-expression-per-line': 'off',
  // 'unicorn/prevent-abbreviations': 'off',
  // ['unicorn/filename-case'](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/HEAD/docs/rules/filename-case.md)
  'unicorn/filename-case': [
    'error',
    {
      cases: {
        kebabCase: true, // foo-bar.js
        camelCase: false, // fooBar.js
        snakeCase: false, // foo_bar.js
        pascalCase: false, // FooBar.js
      },
      ignore: [
        // 不能匹配文件夹, 如 locales, 可配合 eslintignore 使用
        // /^zh-CN\.[j|t]s$/,
      ],
    },
  ],

  // my rules: off warn error
  'array-bracket-spacing': 'error',

  'arrow-body-style': 'off',
  // 'arrow-body-style': ['error', 'as-needed', {
  //   'requireReturnForObjectLiteral': true,
  // }],
  camelcase: 'off',

  // 'sort-imports': 'off',
  'class-methods-use-this': 'off',
  'comma-dangle': [
    'error',
    {
      // before: false,
      // after: true,
      arrays: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
      imports: 'always-multiline',
      objects: 'always-multiline',
    },
  ],
  'comma-spacing': 'error',

  'consistent-return': 'off',
  'func-names': 'off',
  // 'function-paren-newline': 'off',
  'no-bitwise': 'off',
  'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
  'no-continue': 'off',
  'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off',
  'no-else-return': 'off',
  'no-empty': [
    'error',
    {
      allowEmptyCatch: true,
    },
  ],
  'no-empty-function': 'off',
  // 'brace-style': 'off',
  // 'comma-dangle': 'off',
  // 'comma-spacing': 'off',
  // 'default-param-last': 'off',
  // 'dot-notation': 'off',
  // 'func-call-spacing': 'off',
  // indent: 'off',
  // 'init-declarations': 'off',
  // 'keyword-spacing': 'off',
  // 'lines-between-class-members': 'off',
  // 'no-array-constructor': 'off',
  // 'no-dupe-class-members': 'off',
  // 'no-duplicate-imports': 'off',
  // 'no-extra-semi': 'off',
  'no-extra-parens': 'off',
  'no-implied-eval': 'off',
  'no-inner-declarations': 'warn',
  'no-invalid-this': 'off',
  // 不使用 else if，也能使代码比较清晰
  'no-lonely-if': 'off',
  'no-loop-func': 'off',
  'no-loss-of-precision': 'off',
  'no-magic-numbers': 'off',
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
  'no-redeclare': 'off',
  // 'no-confusing-arrow': 'off',
  // 'linebreak-style': 'off',
  // // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
  // 'no-prototype-builtins': 'off',
  // // Conflict with prettier
  // 'arrow-parens': 'off',
  // 'object-curly-newline': 'off',
  // 'implicit-arrow-linebreak': 'off',
  // 'operator-linebreak': 'off',
  // 'eslint-comments/no-unlimited-disable': 'off',
  'no-restricted-imports': [
    'error',
    {
      patterns: [
        {
          group: ['*/.umi/*'],
        },
      ],
    },
  ],

  'no-restricted-syntax': 'off',
  'no-return-await': 'off',
  'no-shadow': 'off',
  'no-throw-literal': 'off',
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
  'no-unused-expressions': 'off',
  'no-unused-vars': 'off',
  // 'generator-star-spacing': 'off',
  'no-use-before-define': 'off',
  // 'no-undef': 'off',
  'no-useless-constructor': 'off',
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
  'no-useless-escape': 'off',
  // 'object-curly-spacing': 'off',
  'object-curly-spacing': [
    'error',
    'always',
    {
      arraysInObjects: true,
      objectsInObjects: true,
    },
  ],
  'prefer-arrow-callback': 'off',
  'prefer-destructuring': 'off',
  'prefer-promise-reject-errors': 'off',
  'prefer-template': 'off',
  'quote-props': ['error', 'as-needed'],
  quotes: [
    'error',
    'single',
    {
      allowTemplateLiterals: true,
      avoidEscape: true,
    },
  ],
  'require-await': 'off',
  'require-yield': 'warn',
  semi: 'off',
  // 不指定格式，无需关注，由 prettier 自动修复即可 (always/never)
  'space-before-function-paren': 'off',
  // 'no-shadow': 'off',
  // 'no-unused-vars': 'off',
  // quotes: 'off',
  // semi: 'off',
  'space-infix-ops': 'off',
  // 'space-before-function-paren': [
  //   'error',
  //   {
  //     anonymous: 'always',
  //     named: 'ignore',
  //     asyncArrow: 'ignore',
  //   },
  // ],
  strict: ['error', 'never'],
};
