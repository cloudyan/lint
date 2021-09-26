# ESLint

常见的冲突规则

```js
{
  rules: {
    // 待定 https://eslint.org/docs/rules/object-curly-spacing
    // 可以 jsExample/src/index.js 测试验证效果
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],
    // 常见的冲突规则
    // 'import/export': 'error',      // 不要关闭
    'react/display-name': 0,    // 可以关闭 displayName, 便于调试
    'react/prop-types': 0,      // 可以关闭 约束 propTypes, 可以使用 TS 替代
    // 变量命名，驼峰式大小写 https://eslint.org/docs/rules/camelcase
    // 因为 query 参数大量存在下换线，可以先关闭 或 整理 allowList
    'camelcase': 0,
    // 'camelcase': ['error', {
    //   properties: true,
    //   ignoreDestructuring: true,
    //   ignoreImports: true,
    //   ignoreGlobals: true,
    //   allow: [],
    // }],
    'class-methods-use-this': 0,
    //  for in 遍历时判断 {}.hasOwnProperty.call(obj, key)
    // 'guard-for-in': 'error',  // 推荐开启
    'no-empty-function': 0, // 可以关闭
    // 禁止使用特定的全局变量 如 event
    // 'no-restricted-globals': 'error', // 不应关闭
    // 推荐默认开启 https://eslint.org/docs/rules/no-script-url
    // 可独立关闭行 javascript:action.dosomthing
    // 'no-script-url': 'error',
    'no-unused-expressions': 0, // 推荐关闭，无法控制使用三元运算符
    // 'no-unused-expressions': ['error', {
    //   allowShortCircuit: true,    // 允许逻辑短路求值
    //   allowTernary: true,         // 允许使用类似逻辑短路求值的三元运算符
    //   allowTaggedTemplates: true, // 允许使用带标签的模板字面量
    //   enforceForJSX: false, // 默认 false
    // }],
    // 优先解构，对象 数组
    'prefer-destructuring': 0, // 可以关闭，也可以使用如下配置
    // 'prefer-destructuring': ['error', {
    //   VariableDeclarator: {
    //     array: true,
    //     object: true,
    //   },
    //   AssignmentExpression: {
    //     array: false,
    //     object: true,
    //   },
    // }],
    // 优先 rest, 替代 arguments
    // 'prefer-rest-params': 'error', // 推荐默认开启
    semi: 0,
  },
}
```


