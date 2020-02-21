const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './index.ts',
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(less|css)?$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { modules: true } },
                    'less-loader'
                ]
            }
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'index.js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        react: 'react'
    }
};