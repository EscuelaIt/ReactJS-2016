require('babel-register')
const join = require('path').join

const PATHS = {
  SRC: join(__dirname, '/src'),
  TEST: join(__dirname, '/test')
}

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    files: [
      'test/**/*.test.js'
    ],
    frameworks: ['mocha'],
    preprocessors: {
      'src/**/*.js': ['webpack'],
      'test/**/*.js': ['webpack']
    },
    reporters: ['spec'],
    webpack: {
      module: {
        loaders: [{
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass'],
          include: [PATHS.SRC, PATHS.TEST]
        }, {
          test: /\.js$/,
          loaders: ['babel'],
          include: [PATHS.SRC, PATHS.TEST]
        }]
      }
    },
    webpackMiddleware: {
      noInfo: true
    }
  })
}
