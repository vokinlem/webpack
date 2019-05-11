const path = require('path');

module.exports = {
    context: __dirname,
    entry: {
        testloaders: './test-loaders.index.js',
        testCodeSplitting: './test-code-splitting.index.js',
        asyncModule: './test-module/async-module.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
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
            }
        ]
    }
};
