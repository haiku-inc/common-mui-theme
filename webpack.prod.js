const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  target: 'web',
  devtool: 'source-map',
  entry: {
    index: './src/index.ts',
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[fullhash].js',
    library: 'common-mui-theme',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
  },
  optimization: {
    minimize: true,
  },
  plugins: [new CleanWebpackPlugin()],
};
