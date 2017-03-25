let merge = require('lodash.merge');

module.exports = function(config) {
    let newConfig = merge({}, require('./common'), {
        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],
        
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,
        
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,
        
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO
    });
    
    newConfig.plugins.push(require('karma-phantomjs-launcher'));
    
    config.set(newConfig);
};
