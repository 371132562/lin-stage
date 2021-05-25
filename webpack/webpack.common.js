/* webpack基础配置 */

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: path.resolve(__dirname, '../src/main.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: {
                    loader: 'vue-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Custom template using Handlebars',
            template: path.resolve(__dirname, './template/index.html')
        }),
        new HtmlWebpackTagsPlugin({
            tags: ['config/env.config.js'],
            append: false,
            hash: true
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ]
};
