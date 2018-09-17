const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        bundle: "./src/index.js",
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            names:['vendor']
        })
    ]
}