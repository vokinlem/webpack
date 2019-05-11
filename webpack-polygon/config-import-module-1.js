const path = require('path');

module.exports = {
    context: path.resolve(__dirname, './'),
    entry: {
        module1: './module-1.js'
    },
    output: {
        filename: './dist/[name].bundle.js'
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


    }

};
