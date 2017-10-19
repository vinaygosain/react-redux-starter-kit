const webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        plugins: [
            require('karma-chrome-launcher'),
            require('karma-webpack'),
            require('karma-jasmine'),
            require('karma-coverage'),
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        files: [
            //specify your test files in src/test folder or you can change your folder destination here.
            'src/tests/**/*.js'
        ],
        preprocessors: {
            'src/tests/**/*.js': ['coverage', 'webpack']
        },
        webpack: webpackConfig,
        coverageReporter: {
            type: 'html',
            dir: 'coverage/',
            fixWebpackSourcePaths: true
        },
        reporters: ['progress', 'coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    });
};