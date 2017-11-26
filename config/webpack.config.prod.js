const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dashboard',
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'app',
    })
  ],
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
        }
      }
    ]
  }
};

