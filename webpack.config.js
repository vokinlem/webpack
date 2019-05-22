const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: {
        app: './src/main.ts'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.js', '.ts']
    },

    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        interpolate: true
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader',
                    {
                    loader: 'css-loader',
                    options: {
                        import: true
                    }
                }],
            },
            {
                test: /\.ts$/,
                use: [{
                    loader: 'ts-loader',
                    options: {}
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    devServer: {
        port: 9000,
        contentBase: path.resolve(__dirname, './dist')
    },
    devtool: 'source-map'
};
