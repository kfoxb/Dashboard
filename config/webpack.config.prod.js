const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dashboard'
    })
  ],
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'bundle.js',
  },
  // devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: './dist',
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
          // options: {
          //   cacheDirectory: true
          // }
        }
      }
    ]
  }
};

