const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    target: 'browserslist',
    output: {
        filename: '[contenthash].js',
        clean: true,
        assetModuleFilename: './assets/[contenthash][ext]',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[contenthash].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(c|sa|sc)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [require('postcss-preset-env')],
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
};
