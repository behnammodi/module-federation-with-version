const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const package = require('./package.json');
const version = package.version;

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, `./dist/${version}-prod`),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist/${version}-prod'),
  },
});