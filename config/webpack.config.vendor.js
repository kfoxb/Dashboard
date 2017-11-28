const webpack = require('webpack');
const path = require('path');

const { join } = path;
const outputPath = path.resolve(__dirname, '..', 'dist');
module.exports = {
  entry: {
    // create two library bundles, one with jQuery and
    // another with Angular and related libraries
    // 'jquery': ['jquery'],
    // 'angular': ['angular', 'angular-router', 'angular-sanitize']
    react: [
      'react',
      'react-dom',
      'react-router',
      'redux',
      'react-redux',
    ],
  },

  output: {
    filename: '[name].dll.js',
    path: outputPath,

    // The name of the global variable which the library's
    // require() function will be assigned to
    library: '[name]',
  },

  plugins: [
    new webpack.DllPlugin({
      // The path to the manifest file which maps between
      // modules included in a bundle and the internal IDs
      // within that bundle
      path: join(outputPath, '[name]-manifest.json'),
      // The name of the global variable which the library's
      // require function has been assigned to. This must match the
      // output.library option above
      name: '[name]',
    }),
  ],
};
