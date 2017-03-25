let { ContextReplacementPlugin, DefinePlugin } = require('webpack');
var path = require('path');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./common');
let clientConfig = require('./client-config');

//Loaders
let $awesomeTypescript = {
    loader: 'awesome-typescript-loader'
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
    // entry: { },
    
    output: {
        path: path.resolve(__dirname, '../../www')
    },
    
    plugins: [
        new ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, path.resolve(__dirname, '../src')),
        new DefinePlugin(clientConfig)
    ],
    
    module: {
        loaders: [
            // .ts files for TypeScript
            { test: /\.ts$/, loaders: [$awesomeTypescript, $angular2Template, $angularRouter] }
        ]
    }
};

module.exports = webpackMerge(commonConfig, karmaConfig);
