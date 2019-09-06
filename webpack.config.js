const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: ['./src/vue-izitoast.js'],
    output: {
        library: 'VueIziToast',
        libraryTarget: 'umd',
        filename: 'vue-izitoast.js',
        globalObject: 'typeof self !== \'undefined\' ? self : this'
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                exclude: /node_modules/,
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [new VueLoaderPlugin()]
};
