const common = require('./webpack.common.js')
const { BUILD_PATH, ASSET_PATH } = require('../config/base.js')

const path = require('path')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackBar = require('webpackbar')

const config = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, `../${BUILD_PATH}`),
        publicPath: ASSET_PATH,
        filename: 'js/[name].[contenthash].js',
        chunkFilename: 'js/[name].[contenthash].js'
    },
    optimization: {
        runtimeChunk: 'single', //runtime单独chunk
        splitChunks: {
            chunks: 'all' //提取公共依赖插件到chunk
        }
    },
    plugins: [new CleanWebpackPlugin(), new WebpackBar({})]
}

module.exports = merge(common, config)
