module.exports = {
    extends: ['eslint:recommended', 'plugin:vue/essential', 'plugin:prettier/recommended'],
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        // 环境变量（包含多个预定义的全局变量）
        browser: true, //浏览器环境中的全局变量
        node: true, //Node.js 全局变量和 Node.js 作用域
        es6: true, //启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）
        worker: true, //Web Workers 全局变量
        jest: true //Jest 全局变量
    },
    globals: {
        // 你的全局变量（设置为 false 表示它不允许被重新赋值）
        // myGlobal: false
    },
    rules: {
        // 自定义你的规则
        'no-unused-vars': 'warn'
    }
};
