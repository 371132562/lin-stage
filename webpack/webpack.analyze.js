const build = require('./webpack.build.js')
const { merge } = require('webpack-merge')

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const config = {
  plugins: [new BundleAnalyzerPlugin()]
}

module.exports = merge(build, config)
