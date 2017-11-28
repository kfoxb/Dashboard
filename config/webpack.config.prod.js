const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const template = require('html-webpack-template');
const manifest = require('../dist/react-manifest.json');

const outputPath = path.resolve(__dirname, '..', 'dist');
module.exports = {
  entry: './src/index.jsx',
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '..'),
      exclude: ['react-manifest.json', 'react.dll.js'],
    }),
    new HtmlWebpackPlugin({
      title: 'Dashboard',
      inject: false,
      template,
      appMountId: 'app',
      scripts: ['react.dll.js'],
    }),
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname),
      manifest,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new UglifyJsPlugin({
      sourceMap: true,
    }),
  ],
  output: {
    path: outputPath,
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
};

