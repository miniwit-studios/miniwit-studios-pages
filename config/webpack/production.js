let { ContextReplacementPlugin, DefinePlugin } = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
let path = require('path');
let webpackMerge = require('webpack-merge');
let commonConfig = require('./common');
let clientConfig = require('./client-config');

//Loaders
let $style = {
    loader: 'style-loader'
};
let $toString = {
    loader: 'to-string-loader'
};
let $trim = {
    loader: 'trim-loader'
};
let $css = {
    loader: 'css-loader'
};
let $sass = {
    loader: 'sass-loader',
    options: {
        includePaths: [
            path.resolve(__dirname, "../../public/assets/styles"),
            path.resolve(__dirname, "../../src/styles")
        ]
    }
};
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

let devConfig = {
    entry: {
        'main':   './src/main.browser.ts',
        'import': './src/styles/styles.scss'
    },
    
    output: {
        path: path.resolve(__dirname, '../../dist')
    },
    
    plugins: [
        new ContextReplacementPlugin(/angular(\\|\/)core/, path.resolve(__dirname, '../../src')),
        new DefinePlugin(clientConfig),
        new UglifyJSPlugin()
    ],
    
    module: {
        loaders: [
            { test: /\.ts$/, loaders: [$awesomeTypescript, $angular2Template, $angularRouter], exclude: /\.spec\.ts$/ },
            { test: /\.css$/, loaders: [$toString, $trim, $css] },
            { test: /\.html$/, loaders: [$trim] },
            { test: /\.scss$/, loaders: [$style, $trim, $sass], exclude: /(app|modules|shared)(\/|\\)./ },
            { test: /(app|modules|shared)(\/|\\).+\.scss$/, loaders: [$toString, $trim, $sass] }
        ]
    }
};

module.exports = webpackMerge(commonConfig, devConfig);
