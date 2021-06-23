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
        open: false, // 告诉dev-server在服务器启动后打开浏览器
        proxy: {
            '/mock': 'http://10.2.2.49:3000'
        },
        overlay: {
            //出现编译器错误或警告时，在浏览器中显示全屏覆盖。
            warnings: false,
            errors: true
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
        // new webpack.DllReferencePlugin({
        //     manifest: require(path.resolve(__dirname, `../${DLL_PATH}/manifest.json`)),
        //     context: path.resolve(__dirname, `../${DLL_PATH}`)
        // })
    ]
}

module.exports = merge(common, config)
