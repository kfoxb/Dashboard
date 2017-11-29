const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const template = require('html-webpack-template');
const manifest = require('../dist/dependencies.dll.manifest.json');
const devManifest = require('../dist/devDependencies.dll.manifest.json');

const outputPath = path.resolve(__dirname, '..', 'dist');
module.exports = {
  entry: './src/index.jsx',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dashboard',
      inject: false,
      template,
      appMountId: 'app',
      scripts: ['dependencies.dll.js'],
      minify: {
        collapseWhitespace: true,
      },
    }),
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname),
      manifest,
    }),
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname),
      manifest: devManifest,
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

