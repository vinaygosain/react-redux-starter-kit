const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: {
        vendor: [
            'react'
        ],
        index: path.resolve(__dirname, '../src/index')
    },

    output: {
        path: path.resolve(__dirname, '../dist'), // Note: Physical files are only output by the production build task `npm run build`.
        filename: '[name][hash].js',
    },

    stats: {
        colors: true,
        reasons: true,
        chunks: true
    },

    devServer: {
        contentBase: path.resolve(__dirname, '../src'),
        hot: true,
    },

    resolve: {
        modules: [
            path.resolve(__dirname, './'),
            'node_modules',
        ],
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: [/\.js$/, /\.jsx$/],
                include: path.join(__dirname, '../src'),
                loaders: ['babel-loader']
            },
            {
                test: /(\.css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            minimize: true,
                            localIdentName: '[local]' // this is for keeping the name of classes in imported css files same
                            // with the hashed name generated by css-loader modules
                        }
                    }
                })
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url?prefix=font/&limit=5000'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'file-loader'
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /(node_modules)/,
                options: {
                    fix: true,
                },
                loader: 'eslint-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: 3,
        }),

        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src', 'index.html'),
            title: 'Dynamic Html',
        }),

        new webpack.NamedModulesPlugin(),

        new webpack.HotModuleReplacementPlugin(),

        new ExtractTextPlugin({
            filename: "styles.css",
            allChunks: true,
        }),
    ]
};
