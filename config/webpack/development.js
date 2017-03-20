let webpack = require('webpack');
let path = require('path');
let webpackMerge = require('webpack-merge');
let commonConfig = require('./common');

let devConfig = {
    entry: {
        'main': './src/main.browser.ts'
    },
    
    output: {
        path: path.resolve(__dirname, '../../www'),
    },
    
    plugins: [
        new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, path.resolve(__dirname, '../src')),
        // new webpack.optimize.CommonsChunkPlugin({ name: ['main', 'vendor', 'polyfills', 'head'], minChunks: Infinity })
    ],
    
    module: {
        loaders: [
            // .ts files for TypeScript
            { test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader', 'angular-router-loader?debug=false'] },
            { test: /\.css$/, loaders: ['to-string-loader', 'css-loader'] },
            { test: /\.html$/, loaders: ['trim-loader'] }
        ]
    },
    
    devServer: {
        historyApiFallback: true,
        watchOptions: { aggregateTimeout: 300, poll: 1000 }
    }
};

module.exports = webpackMerge(commonConfig, devConfig);
