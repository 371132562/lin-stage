module.exports = {
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 12, //默认设置为 3，5（默认）， 你可以使用 6、7、8、9 或 10 来指定你想要使用的 ECMAScript 版本。你也可以用使用年份命名的版本号指定为 2015（同 6），2016（同 7），或 2017（同 8）或 2018（同 9）或 2019 (same as 10)
    sourceType: "module", //sourceType - 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
    ecmaFeatures: {
      //这是个对象，表示你想使用的额外的语言特性
      jsx: true
    }
  },
  env: {
    // 环境变量（包含多个预定义的全局变量）
    browser: true, //浏览器环境中的全局变量
    node: true, //Node.js 全局变量和 Node.js 作用域
    es2021: true, //启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）
    worker: true, //Web Workers 全局变量
    jest: true //Jest 全局变量
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    // myGlobal: false
  },
  rules: {
    // 自定义你的规则
    indent: 'error',
    quotes: 'error',
    semi: 'error',
    'no-unused-vars': 'warn'
  }
}
