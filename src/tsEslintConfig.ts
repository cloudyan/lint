export default {
  '@typescript-eslint/adjacent-overload-signatures': 'off',
  '@typescript-eslint/array-type': 'error',
  '@typescript-eslint/await-thenable': 'off',
  '@typescript-eslint/ban-ts-comment': 'off',
  '@typescript-eslint/ban-tslint-comment': 'off',

  '@typescript-eslint/brace-style': 'off',
  '@typescript-eslint/class-literal-property-style': 'off',

  // '@typescript-eslint/comma-dangle': 'off',
  // '@typescript-eslint/comma-spacing': 'off',
  '@typescript-eslint/consistent-indexed-object-style': 1,
  '@typescript-eslint/consistent-type-assertions': 'off',
  '@typescript-eslint/consistent-type-definitions': 'off',
  '@typescript-eslint/consistent-type-imports': 1,

  // '@typescript-eslint/default-param-last': 'off',
  // '@typescript-eslint/dot-notation': 1,
  '@typescript-eslint/explicit-function-return-type': 'off',

  // '@typescript-eslint/func-call-spacing': 'off',
  '@typescript-eslint/init-declarations': 'off',

  // '@typescript-eslint/keyword-spacing': 'off',
  // '@typescript-eslint/lines-between-class-members': 'off',
  '@typescript-eslint/member-delimiter-style': 'off',
  '@typescript-eslint/member-ordering': 'off',
  '@typescript-eslint/method-signature-style': 'error',

  // '@typescript-eslint/no-array-constructor': 'off',
  '@typescript-eslint/no-base-to-string': 'off',
  '@typescript-eslint/no-confusing-non-null-assertion': 'error',
  '@typescript-eslint/no-confusing-void-expression': 'off',

  // '@typescript-eslint/no-dupe-class-members': 'error',
  // '@typescript-eslint/no-duplicate-imports': 'off',
  '@typescript-eslint/no-dynamic-delete': 'off',
  'no-empty-function': 'off',
  '@typescript-eslint/no-empty-function': 'off',
  '@typescript-eslint/no-empty-interface': 1,
  '@typescript-eslint/no-extra-non-null-assertion': 'off',
  'no-extra-parens': 'off',
  '@typescript-eslint/no-extra-parens': 'off',

  // '@typescript-eslint/no-extra-semi': 'off',
  '@typescript-eslint/no-extraneous-class': 'off',
  '@typescript-eslint/no-floating-promises': 'off',
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-implicit-any-catch': 'off',

  '@typescript-eslint/no-implied-eval': 'off',
  '@typescript-eslint/no-inferrable-types': 'off',
  '@typescript-eslint/no-invalid-this': 'error',
  '@typescript-eslint/no-invalid-void-type': 'off',
  '@typescript-eslint/no-loop-func': 'error',
  '@typescript-eslint/no-loss-of-precision': 'off',
  '@typescript-eslint/no-magic-numbers': 'off',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-misused-promises': 'off',
  '@typescript-eslint/no-namespace': 1,
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/no-parameter-properties': 'error',

  '@typescript-eslint/no-redeclare': 'error',
  '@typescript-eslint/no-require-imports': 'off',

  '@typescript-eslint/no-shadow': 'off',
  '@typescript-eslint/no-this-alias': 'error',

  '@typescript-eslint/no-throw-literal': 'error',
  '@typescript-eslint/no-type-alias': 'off',
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
  '@typescript-eslint/no-unnecessary-condition': 'off',
  '@typescript-eslint/no-unnecessary-qualifier': 'off',
  '@typescript-eslint/no-unnecessary-type-arguments': 'off',
  '@typescript-eslint/no-unnecessary-type-assertion': 'off',
  '@typescript-eslint/no-unnecessary-type-constraint': 'off',
  '@typescript-eslint/no-unsafe-assignment': 'off',
  '@typescript-eslint/no-unsafe-call': 'off',
  '@typescript-eslint/no-unsafe-member-access': 'off',
  '@typescript-eslint/no-unsafe-return': 'off',
  '@typescript-eslint/no-unused-expressions': 'off',

  '@typescript-eslint/no-useless-constructor': 'error',
  '@typescript-eslint/non-nullable-type-assertion-style': 'off',
  '@typescript-eslint/prefer-as-const': 'off',
  '@typescript-eslint/prefer-enum-initializers': 'off',
  '@typescript-eslint/prefer-for-of': 'off',
  '@typescript-eslint/prefer-function-type': 'off',
  '@typescript-eslint/prefer-includes': 'off',
  '@typescript-eslint/prefer-literal-enum-member': 'off',
  '@typescript-eslint/prefer-namespace-keyword': 'off',
  '@typescript-eslint/prefer-nullish-coalescing': 'off',
  '@typescript-eslint/prefer-optional-chain': 'off',
  '@typescript-eslint/prefer-readonly': 'off',
  '@typescript-eslint/prefer-readonly-parameter-types': 'off',
  '@typescript-eslint/prefer-reduce-type-parameter': 'off',
  '@typescript-eslint/prefer-regexp-exec': 'off',
  '@typescript-eslint/prefer-string-starts-ends-with': 'off',
  '@typescript-eslint/prefer-ts-expect-error': 'off',
  '@typescript-eslint/promise-function-async': 'off',

  // '@typescript-eslint/quotes': 'off',
  '@typescript-eslint/require-array-sort-compare': 'off',

  '@typescript-eslint/require-await': 'off',
  '@typescript-eslint/restrict-plus-operands': 'off',
  '@typescript-eslint/restrict-template-expressions': 'off',

  '@typescript-eslint/return-await': 'off',

  // '@typescript-eslint/semi': 'off',

  '@typescript-eslint/space-before-function-paren': 'off',
  '@typescript-eslint/space-infix-ops': 'off',
  '@typescript-eslint/strict-boolean-expressions': 'off',
  '@typescript-eslint/switch-exhaustiveness-check': 'error',
  '@typescript-eslint/triple-slash-reference': 'error',
  '@typescript-eslint/type-annotation-spacing': 'error',
  '@typescript-eslint/typedef': 'error',
  '@typescript-eslint/unbound-method': 'off',
  '@typescript-eslint/unified-signatures': 'error',
  '@typescript-eslint/indent': 'off',
  // Makes no sense to allow type inferrence for expression parameters, but require typing the response
  '@typescript-eslint/no-use-before-define': 'off',
  // '@typescript-eslint/no-use-before-define': [
  //   'warn',
  //   {
  //     functions: false,
  //     classes: true,
  //     variables: true,
  //     typedefs: true,
  //   },
  // ],

  '@typescript-eslint/camelcase': 'off',
  '@typescript-eslint/no-var-requires': 'off',
  // Common abbreviations are known and readable
  '@typescript-eslint/explicit-member-accessibility': 'off',
  '@typescript-eslint/interface-name-prefix': 'off',
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/ban-types': 1,
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/naming-convention': 'off',
  '@typescript-eslint/no-unused-vars': 'off',
  // '@typescript-eslint/no-unused-vars': [
  //   'error',
  //   {
  //     vars: 'all',
  //     args: 'none',
  //     caughtErrors: 'none',
  //     ignoreRestSiblings: true,
  //   },
  // ],
};
