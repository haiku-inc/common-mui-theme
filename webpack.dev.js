const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');
require('dotenv').config({ path: './.env.dev' });

module.exports = merge(common, {
  mode: 'development',
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[fullhash].js',
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.ico',
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    compress: true,
    devMiddleware: {
      publicPath: '/',
      serverSideRender: true,
      writeToDisk: true,
    },
    client: {
      logging: 'info',
      overlay: true,
      progress: true,
    },
    open: true,
    port: 3005,
  },
});
