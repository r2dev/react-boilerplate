var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var autoprefixer = require('autoprefixer')
module.exports = {
    context: __dirname,
    entry: [
        /*'webpack-dev-server/client?http://localhost:8080',
         'webpack/hot/only-dev-server',*/
        './src/index.js'
    ],
    output: { path: __dirname, filename: 'bundle.js' },

    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            },
            {
                test: /.jsx?$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/,
            },
            {
                test: /(\.scss|\.css)$/,
                loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass!toolbox')
            }
        ]
    },
    toolbox: {
        theme: path.join(__dirname, 'toolbox-theme.scss')
    },
    resolve: {
        extensions: ['', '.jsx', '.scss', '.js', '.json'],
        modulesDirectories: [
            'node_modules',
            path.resolve(__dirname, './node_modules')
        ]
    },
    postcss: [autoprefixer],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('/static/css/bundle.css', { allChunks: true }),
        new webpack.NoErrorsPlugin(),

        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify('production') }
        })


    ],
    devServer: {
        hot: true,
        historyApiFallback: true
    }
};