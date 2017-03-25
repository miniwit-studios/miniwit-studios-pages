'use strict';

let path = require('path');
let argv = require('yargs').argv;
let minimatch = require("minimatch");

let webpackConfig = require('../webpack/testing');

let rootProjectPath = path.join(__dirname, '../../');

module.exports = {
    
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: rootProjectPath,
    
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],
    
    plugins: [
        require('karma-webpack'),
        require('karma-jasmine'),
        require('karma-super-dots-reporter'),
        require('karma-defer-spec-reporter')
    ],
    
    mime: {
        'text/x-typescript': ['ts','tsx']
    },
    
    // list of files / patterns to load in the browser
    files: [
        // Polyfills.
        './src/polyfills.browser.ts',
        
        // Spec tests.
        './src/**/*.spec.ts'
    ],
    
    webpack: webpackConfig,
    webpackMiddleware: {
        stats: 'errors-only',
        quiet: true
    },
    
    preprocessors: {
        './src/polyfills.browser.ts': ['webpack'],
        './src/vendor.browser.ts': ['webpack'],
        './src/**/*.spec.ts': ['webpack']
    },
    
    // // must go along with above, suppress annoying 404 warnings.
    // proxies: {
    //     '/assets/': '/base/dist/dev/assets/'
    // },
    
    // // list of files to exclude
    // exclude: [
    //     'node_modules/**/*spec.js'
    // ],
    
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['super-dots', 'defer-spec'],
    superDotsReporter: {
        icon: {
            success: '.',
            failure: 'X',
            ignore: '#'
        },
        color: {
            success: 'green',
            failure: 'red',
            ignore: 'yellow'
        }
    },
    
    // web server port
    port: 9876,
    
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    
    // Passing command line arguments to tests
    client: {
        files:  argv.files ? minimatch.makeRe(argv.files).source : null
    }
};

// if (process.env.APPVEYOR) {
//     config.browsers = ['IE'];
//     config.singleRun = true;
//     config.browserNoActivityTimeout = 90000; // Note: default value (10000) is not enough
// }

// if (process.env.TRAVIS || process.env.CIRCLECI) {
//     config.browsers = ['Chrome_travis_ci'];
//     config.singleRun = true;
//     config.browserNoActivityTimeout = 90000;
// }
