const common = require('./webpack.common.js')
const { PORT, HOST, BUILD_PATH } = require('../config/base.js')

const webpack = require('webpack')
const path = require('path')
const { merge } = require('webpack-merge')

const config = {
    mode: 'development',
    devtool: 'source-map',
    cache: true,
    target: 'web',
    devServer: {
        port: PORT,
        host: HOST,
        contentBase: path.resolve(__dirname, `../${BUILD_PATH}`), // 告诉服务器从哪个目录中提供内容。只用在你想要提供静态文件时才需要。
        hot: true, // 启用webpack的模块热替换功能
        compress: true, // 一切服务都启用gzip压缩
        noInfo: false, // 隐藏webpack bundle信息之类的消息
        open: false // 告诉dev-server在服务器启动后打开浏览器
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
}

module.exports = merge(common, config)
