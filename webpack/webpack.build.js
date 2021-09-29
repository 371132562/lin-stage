const common = require('./webpack.common.js')
const { BUILD_PATH, ASSET_PATH } = require('../config/base.js')

const path = require('path')
const { merge } = require('webpack-merge')

const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const WebpackBar = require('webpackbar')

const config = {
    mode: 'production',
    output: {
        clean: true, // 在生成文件之前清空 output 目录
        path: path.resolve(__dirname, `../${BUILD_PATH}`),
        publicPath: ASSET_PATH,
        filename: 'js/[name].[contenthash].js',
        chunkFilename: 'js/[name].[contenthash].js'
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({ exclude: ['config'], parallel: true }), new CssMinimizerPlugin()],
        runtimeChunk: 'single', //runtime单独chunk
        splitChunks: {
            chunks: 'all', //提取公共依赖插件到chunk,
            maxAsyncRequests: 5, //按需加载时的最大并行请求数。
            maxInitialRequests: 3 //入口点的最大并行请求数。
        }
    },
    plugins: [new WebpackBar({})]
}

module.exports = merge(common, config)
