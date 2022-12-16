const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        open: true,
        hot: true,
    },
};
