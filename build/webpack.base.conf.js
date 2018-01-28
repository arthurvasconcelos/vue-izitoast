'use strict';
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'vue-izitoast.umd.js',
        library: "vue-izitoast",
        libraryTarget: "umd"
    },
    resolve: {
        extensions: ['.js'],
        modules: [
            path.resolve(__dirname, '../src'),
            path.resolve(__dirname, '../node_modules')
        ]
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [path.resolve(__dirname, '../src')],
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname, '../src')]
            }
        ]
    }
}

