process.env.NODE_ENV = 'production';
var webpack = require('webpack');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var baseWebpackConfig = require('./webpack.base.config');
var ManifestPlugin = require('webpack-manifest-plugin');
var utils = require('./utils');
var config = require('./config');

module.exports = merge(baseWebpackConfig, {
  output: {
    path: config.prod.outputPath,
    publicPath: config.prod.outputPublicPath
  },
  module: {
    rules: utils.styleLoaders()
  },
  plugins: [
    new webpack.DefinePlugin({
      'progress.end.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin({
      filename: "css/application-bundle.css"
    }),
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: 'index.html',
    //   inject: true
    // }),
    new ManifestPlugin({
      fileName: 'webpack_manifest.json'
    })
  ]
})