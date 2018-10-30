const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.js');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

//const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//const ManifestPlugin = require('webpack-manifest-plugin');\
//const enableBundleAnalyzer = process.env.ENABLE_ANALYZER === 'true';

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //     },
    //     runtimeChunk: false,
    // },
    plugins: [
        new webpack.DefinePlugin({
            'REACT_APP_DEFAULT_PROFILE': JSON.stringify(process.env.REACT_APP_DEFAULT_PROFILE),
            'PROFILE_API_URL': JSON.stringify('https://floating-badlands-28055.herokuapp.com'),
        }),
        new CleanWebpackPlugin([path.resolve(__dirname, '../dist/*.*')], {
            root: process.cwd(),
            verbose: true,
            dry: false
        }),
        //new ManifestPlugin(),
    ],
});
