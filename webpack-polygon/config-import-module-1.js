const path = require('path');

module.exports = function(env, args) {

    const isProd = args.mode === 'production';

    return {
        context: path.resolve(__dirname, './'),
        entry: {
            module1: './module-1.js'
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: '[name].bundle.js'
        },

        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', {
                        loader: 'css-loader',
                        options: {
                            import: true
                        }
                    }]
                },
                {
                    test: /\.html$/,
                    use: ['html-loader']
                }
            ]
        },

        devtool: isProd ? 'eval-source-map' : 'source-map'

    }
};
