const path = require('path')
const { merge } = require('webpack-merge')

const common = require('./webpack.common.js')
const { PORT, HOST, BUILD_PATH } = require('../config/base.js')

const config = {
    mode: 'development',
    devtool: 'eval-source-map',
    output: {
        path: path.resolve(__dirname, `../${BUILD_PATH}`),
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    devServer: {
        port: PORT,
        host: HOST,
        hot: true, // 启用webpack的模块热替换功能
        compress: true, // 一切服务都启用gzip压缩
        open: true, // 告诉dev-server在服务器启动后打开浏览器
        static: {
            directory: path.resolve(__dirname, `../${BUILD_PATH}`), // 告诉服务器从哪个目录中提供内容。只用在你想要提供静态文件时才需要。
            serveIndex: true //serveIndex 中间件会在查看没有 index.html 文件的目录时生成目录列表。
        },
        client: {
            logging: 'error', //'log' | 'info' | 'warn' | 'error' | 'none' | 'verbose' 允许在浏览器中设置日志级别
            overlay: {
                //出现编译器错误或警告时，在浏览器中显示全屏覆盖。
                warnings: false,
                errors: true
            },
            progress: true //以百分比显示编译进度。
        }

        // proxy: {
        //     '/api': 'http://localhost:3000',
        // },
    },
    plugins: [
        // new webpack.DllReferencePlugin({
        //     manifest: require(path.resolve(__dirname, `../${DLL_PATH}/manifest.json`)),
        //     context: path.resolve(__dirname, `../${DLL_PATH}`)
        // })
    ]
}

module.exports = merge(common, config)
