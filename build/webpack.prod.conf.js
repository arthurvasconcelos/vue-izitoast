'use strict';
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
];

const webpackConfig = merge.smart({}, baseWebpackConfig, { plugins }, {
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'vue-izitoast.js',
        library: "vue-izitoast",
        libraryTarget: "umd"
    }
});

const webpackConfigMin = merge.smart({}, baseWebpackConfig, {
    plugins: [
        ...plugins,
        new UglifyJSPlugin({
            uglifyOptions: {
                compress: {
                    warnings: false
                },
                sourceMap: true
            }
        })
    ]
}, {
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'vue-izitoast.min.js',
        library: "vue-izitoast",
        libraryTarget: "umd"
    }
});

// if (config.build.productionGzip) {
//     const CompressionWebpackPlugin = require('compression-webpack-plugin');

//     webpackConfig.plugins.push(
//         new CompressionWebpackPlugin({
//             // asset: '[path].gz[query]',
//             asset: (process.env.NODE_ENV === 'production') ? '[path][query]' : '[path].gz[query]',
//             algorithm: 'gzip',
//             test: new RegExp(
//                 '\\.(' +
//                 config.build.productionGzipExtensions.join('|') +
//                 ')$'
//             ),
//             // threshold: 10240,
//             threshold: 0,
//             // minRatio: 0.8,
//             minRatio: 2,
//             deleteOriginalAssets: false
//             // deleteOriginalAssets: true
//         })
//     );
// }

module.exports = [webpackConfig, webpackConfigMin];
