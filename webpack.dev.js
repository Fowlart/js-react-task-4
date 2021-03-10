const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['.jsx', '.js']
    },
    mode: 'development',
    // entry point for sources
    entry: {
        main: "./src/index.jsx"
    },
    output: {
        filename: "[name].js", // output files
        path: path.resolve(__dirname, "dist") // absolute path from current folder(__dirname)
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
        template: path.resolve(__dirname,"index.html")
    })],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 8000
    },
    module: {
        // LOADERS ARE HERE!
        rules: [
            // Each is an object with three main properties:
            {
                test: /\.jsx$/, // file type to accept
                exclude: /(node_modules)/, // stay away
                use: { // loader from node_modules
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(png|jpeg|gif|svg)$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'url-loader?limit=10000&content=static&name=images/[name].[ext]'
                    }
                ]
            }
        ]
    }
}