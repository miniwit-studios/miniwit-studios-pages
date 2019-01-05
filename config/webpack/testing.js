let { ContextReplacementPlugin, DefinePlugin } = require('webpack');
var path = require('path');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./common');

process.env.NODE_ENV = 'testing';
let clientConfig = require('./client-config');

//Loaders
let $awesomeTypescript = {
    loader: 'awesome-typescript-loader',
    options: {
        silent: true
    }
};
let $angular2Template = {
    loader: 'angular2-template-loader'
};
let $angularRouter = {
    loader: 'angular-router-loader',
    options: {
        debug: false
    }
};

var karmaConfig = {
    output: {
        path: path.resolve(__dirname, '../../www')
    },
    
    plugins: [
        new ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, path.resolve(__dirname, '../src')),
        new DefinePlugin(clientConfig)
    ],
    
    module: {
        rules: [
            // .ts files for TypeScript
            { test: /\.ts$/, loaders: [$awesomeTypescript, $angular2Template, $angularRouter] }
        ]
    }
};

module.exports = webpackMerge(commonConfig, karmaConfig);
