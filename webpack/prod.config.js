const webpack = require("webpack");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

let config = require("./base.config");

config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
            warnings: false
        }
    })
);

config.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        },
        IS_DEV_ENV: false
    })
);

config.plugins.push(
    new CleanWebpackPlugin([path.resolve(__dirname, '../dist')], {
        root: process.cwd(), // without this ,it was throwing error ' directory is outside of the project root. Skipping...'
        verbose: true,
    })
);

config.plugins.push(
    new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
    })
);
module.exports = config;