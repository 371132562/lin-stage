/* webpack基础配置 */
const { TITLE, BUILD_PATH } = require('../config/base.js')

const path = require('path')
const env = process.env.NODE_ENV

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const Dotenv = require('dotenv-webpack')

module.exports = {
    entry: path.resolve(__dirname, '../src/main.js'),
    output: {
        path: path.resolve(__dirname, `../${BUILD_PATH}`),
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    resolve: {
        alias: {
            $config: path.resolve(__dirname, '../config'),
            '@': path.resolve(__dirname, '../src'),
            $store: path.resolve(__dirname, '../src/store'),
            $assets: path.resolve(__dirname, '../src/assets'),
            $utils: path.resolve(__dirname, '../src/utils'),
            $services: path.resolve(__dirname, '../src/services'),
            $layouts: path.resolve(__dirname, '../src/layouts'),
            $components: path.resolve(__dirname, '../src/components')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: {
                    loader: 'vue-loader'
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: TITLE,
            template: path.resolve(__dirname, './template/index.html')
        }),
        new HtmlWebpackTagsPlugin({
            //在index.html中引入env文件
            tags: ['config/env.config.js'],
            append: false,
            hash: true
        }),
        new CopyWebpackPlugin({
            //直接复制env文件至config文件夹，打包后也可更改参数
            patterns: [{ from: 'config/env.config.js', to: 'config' }]
        }),
        new VueLoaderPlugin(),
        new Dotenv({
            path: `./.env.${env === 'production' ? 'production' : 'development'}`
        })
    ]
}
