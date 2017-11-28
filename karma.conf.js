const path = require('path');

module.exports = (config) => {
  config.set({
    browsers: ['Chrome'],
    // karma only needs to know about the test bundle
    files: [
      'src/**/*.test.js',
      'src/**/*.test.jsx',
    ],
    frameworks: ['chai', 'mocha'],
    plugins: [
      'karma-chrome-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
    ],
    // run the bundle through the webpack and sourcemap plugins
    preprocessors: {
      '**/*test.js': ['webpack', 'sourcemap'],
      '**/*test.jsx': ['webpack', 'sourcemap'],
    },
    reporters: ['dots'],
    singleRun: true,
    // webpack config object
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            include: [
              path.join(__dirname, 'src'),
              path.join(__dirname),
            ],
            exclude: /node_modules/,
            loader: 'babel-loader',
            test: /\.jsx?$/,
          },
        ],
      },
    },
    webpackMiddleware: {
      noInfo: true,
    },
  });
};
