
export type EslintConfig =
  | undefined
  | 'default'
  | 'react'
  | 'typescript'
  | 'react-ts';

export type getEslintConfig = (type: EslintConfig, userConfig: {}) => {

}
