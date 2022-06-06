
// https://stackoverflow.com/questions/58510287/parseroptions-project-has-been-set-for-typescript-eslint-parser

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // project: './tsconfig.eslint.json',
    project: './tsconfig.json', // default project config
    createDefaultProgram: true, // 兼容未在 tsconfig.json 中 provided 的文件
    extraFileExtensions: ['.vue'],
  },
  plugins: ['@typescript-eslint'],
  settings: {
    // Apply special parsing for TypeScript files
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.d.ts', '.tsx'],
    },
    // Use eslint-import-resolver-typescript
    'import/resolver': {
      typescript: {},
    },
    // Append 'ts' extensions to 'import/extensions' setting
    'import/extensions': ['.js', '.ts', '.mjs'],
  },
}
