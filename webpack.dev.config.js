const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    target: 'web',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        open: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(c|sa|sc)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
};
