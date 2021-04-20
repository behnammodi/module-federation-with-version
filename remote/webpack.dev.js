const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const package = require('./package.json');
const version = package.version;

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, `./dist/${version}-dev`),
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist/${version}-dev'),
  },
});