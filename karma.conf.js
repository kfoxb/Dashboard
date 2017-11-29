const webpackTestConfig = require('./config/webpack.config.test.js');

const testFile = 'config/setup.test.js';
module.exports = (config) => {
  config.set({
    browsers: ['Chrome'],
    // karma only needs to know about the test bundle
    files: [
      {
        pattern: './dist/dependencies.dll.js/',
        watched: false,
        served: true,
      },
      {
        pattern: './dist/devDependencies.dll.js/',
        watched: false,
        served: true,
      },
      testFile,
    ],
    frameworks: ['chai', 'mocha'],
    // run the bundle through the webpack and sourcemap plugins
    preprocessors: {
      [testFile]: ['webpack', 'sourcemap'],
    },
    reporters: ['progress'],
    singleRun: true,
    // webpack config object
    webpack: webpackTestConfig,
    webpackMiddleware: {
      noInfo: true,
    },
  });
};
