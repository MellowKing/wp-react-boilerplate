const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
}

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    path.join(PATHS.src, '/index.js'),
  ],
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(PATHS.src, '/index.ejs'),
    }),
    new ExtractTextPlugin('bundle.css', { allChunks: true }),
  ],
  module: {
    loaders: [
      { test: /\.less$/,
        loaders: ['style', 'css', 'less'],
      },
    ],
  },
}
