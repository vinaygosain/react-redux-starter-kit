const webpack = require("webpack");
let config = require("./base.config");

config.devtool = '#source-map';

config.module.loaders.push(
    {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        options: {
            fix: true,
        },
        loader: 'eslint-loader'
    }
);

config.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('development')
        },
        IS_DEV_ENV: true
    })
);

module.exports = config;
