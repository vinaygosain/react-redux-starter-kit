var path = require('path');

module.exports = {
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    output: {
        path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: true
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: [/\.js$/, /\.jsx$/],
                include: path.join(__dirname, 'src'),
                loaders: ['babel-loader']
            },
            {
                test: /(\.css)$/,
                loaders: ['style-loader', 'css-loader']
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
                enforce: 'pre',
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'eslint-loader'
            }


        ]
    }
};
