/* webpack基础配置 */
const { TITLE, BUILD_PATH } = require('../config/base.js')

const path = require('path')
const env = process.env.NODE_ENV

const HtmlWebpackPlugin = require('html-webpack-plugin')
// const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
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
            '@': path.resolve(__dirname, '../src')
        },
        extensions: ['.vue', '.js', '.scss', 'css']
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
                test: /\.s[ac]ss$/i,
                use: [
                    // 将 JS 字符串生成为 style 节点
                    'style-loader',
                    // 将 CSS 转化成 CommonJS 模块
                    'css-loader',
                    // 将 Sass 编译成 CSS
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif|bmp)$/,
                type: 'asset/resource',
                //解析
                parser: {
                    //转base64的条件
                    dataUrlCondition: {
                        maxSize: 50 * 1024 // 50kb
                    }
                },
                generator: {
                    filename: 'images/[name].[hash:6][ext]'
                }
            },
            {
                test: /\.svg/,
                type: 'asset/inline'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: TITLE,
            template: path.resolve(__dirname, './template/index.html')
        }),
        /*new HtmlWebpackTagsPlugin({
            //在index.html中引入env文件
            tags: ['config/env.config.js'],
            append: false,
            hash: true
        }),
        new CopyWebpackPlugin({
            //直接复制env文件至config文件夹，打包后也可更改参数
            patterns: [{ from: 'config/env.config.js', to: 'config' }]
        }),*/
        new VueLoaderPlugin(),
        new Dotenv({
            path: `./.env.${env === 'production' ? 'production' : 'development'}`
        })
    ]
}
