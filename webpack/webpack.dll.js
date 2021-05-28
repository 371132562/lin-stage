const { BUILD_PATH, DLL_PATH } = require('../config/base.js')
const vendors = ['vue', 'vue-router', 'vuex', 'axios', 'ant-design-vue']

const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: vendors,
    output: {
        publicPath: '',
        path: path.resolve(__dirname, `../${DLL_PATH}`), // 告诉服务器从哪个目录中提供内容。只用在你想要提供静态文件时才需要。
        filename: '[name]_[hash].js',
        library: '[name]_[hash]'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.resolve(__dirname, `../${DLL_PATH}/manifest.json`),
            name: '[name]_[hash]',
            context: path.resolve(__dirname, `../${DLL_PATH}`)
        })
    ]
}
