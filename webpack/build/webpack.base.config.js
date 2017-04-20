var webpack = require('webpack');
var path = require('path');
var utils = require('./utils');

function resolve(relPath){
  return path.resolve(__dirname, relPath);
}

module.exports = {
  entry: {
    app: resolve('../src/main.js')
  },
  output: {
    filename: 'js/application-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        include: [resolve('../src')]
      },
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader",
          options: utils.vueLoaderOptions()
        },
        include: [resolve('../src')]
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            name: 'images/[name].[ext]'
          }
        },
        include: [resolve('../src')]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'fonts/[name].[ext]'
          }
        },
        include: [resolve('../src')]
      }
    ]
  }
}