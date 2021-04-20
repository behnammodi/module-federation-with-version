const path = require('path');
const { ModuleFederationPlugin } = require("webpack").container;

const remote = '1.0.1'

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        remote: `remote@http://localhost:9000/${remote}/remoteEntry.js`,
      },
      shared: ["react", "react-dom"],
    }),
  ],
};