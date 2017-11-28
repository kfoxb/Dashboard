const webpackProdConfig = require('./config/webpack.config.prod.js');

webpackProdConfig.devtool = 'inline-source-map';
const testFile = 'config/setup.test.js';
module.exports = (config) => {
  config.set({
    browsers: ['Chrome'],
    // karma only needs to know about the test bundle
    files: [
      testFile,
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
      [testFile]: ['webpack', 'sourcemap'],
    },
    reporters: ['dots'],
    singleRun: true,
    // webpack config object
    webpack: webpackProdConfig,
    webpackMiddleware: {
      noInfo: true,
    },
  });
};
