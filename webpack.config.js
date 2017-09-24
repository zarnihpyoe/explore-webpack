const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    entry: {
        app: './src/index.js',
    },
    devtool: 'inline-source-map',       // source map for easier debug (don't do this for production)
    devServer: {                        // telling webpack-dev-server
        contentBase: './dist',            // - to serve files from ./dist on localhost:8080
        hot: true,                        // - to use hot module replacement
    },
    plugins: [
        new CleanWebpackPlugin([ 'dist' ]),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new UglifyJSPlugin(),                       // minify output bundle
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
}