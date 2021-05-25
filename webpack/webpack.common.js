/* webpack基础配置 */

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Custom template using Handlebars',
            template: path.resolve(__dirname, './template/index.html')
        }),
        new CleanWebpackPlugin()
    ]
};
