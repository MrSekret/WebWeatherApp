var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require("copy-webpack-plugin");

let mode = 'development'
if(process.env.NODE_ENV=='production'){
    mode='production'
}

module.exports = {
  mode: mode,
  entry: {
    index: './src/index.js',
    requests: './src/scripts/requests.js',
    searchCities: './src/scripts/searchCities.js',
    weatherPage: './src/scripts/weatherPage.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    clean: true,
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
        template: "./src/index.html"
    }),
    new CopyPlugin({
    patterns: [
        { from: './src/assets/png', to: './assets/png' },
        { from: './src/assets/svg', to: './assets/svg' }
    ]
    }),
    new webpack.DefinePlugin({
        'process.env': {
            WEATHERAPIKEY: JSON.stringify(process.env.WEATHERAPIKEY),
            WEATHERAPIKEY2: JSON.stringify(process.env.WEATHERAPIKEY2),
        },
      }),
  ],
  module: {
    rules: [
        {
            test: /\.(sa|sc|c|)ss$/,
            use: [
                (mode == 'development') ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
            ]
        },
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }
    ],
  },
};