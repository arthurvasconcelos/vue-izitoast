'use strict';

process.env.NODE_ENV = 'production';
process.env.npm_config_platform = (process.env.npm_config_platform)
    ? process.env.npm_config_platform
    : '';
process.env.npm_config_environment = (process.env.npm_config_environment)
    ? process.env.npm_config_environment
    : 'production';

const ora = require('ora');
const rm = require('rimraf');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const webpackConfig = require('./webpack.prod.conf');

const spinner = ora('building for production...');

const packageJson = require('../package.json');
const fs = require('fs');

spinner.start();

function printStat(stat) {
    process.stdout.write(stat.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n');

    if (stat.hasErrors()) {
        console.log(chalk.red('  Build failed with errors.\n'));
        process.exit(1);
    }
}

rm(path.join(path.resolve(__dirname, '../dist'), process.env.npm_config_platform), (err) => {
    if (err) {
        throw err;
    }

    webpack(webpackConfig, function (err, stats) {
        spinner.stop();

        if (err) {
            throw err;
        }

        if (stats.hasOwnProperty('stats')) {
            const multiStats = stats.stats;
            multiStats.forEach(stat => {
                printStat(stat)
            });
        } else {
            printStat(stats);
        }

        console.log(chalk.cyan('  Build complete.\n'));
    });
});
