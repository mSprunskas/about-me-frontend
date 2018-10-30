const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: './dist',
        hot: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            'REACT_APP_DEFAULT_PROFILE': JSON.stringify('nickname'),
            //'PROFILE_API_URL': JSON.stringify('http://127.0.0.1:8000'),
            'PROFILE_API_URL': JSON.stringify('https://floating-badlands-28055.herokuapp.com'),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
});
