const common = require('./webpack.common.js')
const { BUILD_PATH, ASSET_PATH } = require('../config/base.js')

const path = require('path')
const { merge } = require('webpack-merge')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const WebpackBar = require('webpackbar')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const config = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, `../${BUILD_PATH}`),
        publicPath: ASSET_PATH,
        filename: 'js/[name].[contenthash].js',
        chunkFilename: 'js/[name].[contenthash].js'
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({ exclude: ['config'], parallel: true })],
        runtimeChunk: 'single', //runtime单独chunk
        splitChunks: {
            chunks: 'all', //提取公共依赖插件到chunk,
            maxAsyncRequests: 5, //按需加载时的最大并行请求数。
            maxInitialRequests: 3 //入口点的最大并行请求数。
        }
    },
    plugins: [new CleanWebpackPlugin(), new WebpackBar({}), new BundleAnalyzerPlugin()]
}

module.exports = merge(common, config)
