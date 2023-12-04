const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
require('dotenv').config({ path: './.env.dev' });

module.exports = {
  target: 'web',
  devtool: 'source-map',
  mode: 'development',
  entry: {
    index: './src/localdev.tsx',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.scss'],
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
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(jpe?g|gif|png|wav|mp3)$/i,
        type: 'asset/resource',
      },
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
};
