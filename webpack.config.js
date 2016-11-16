var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './app/index.js',
  ],
  module: {
    loaders: [
    {
      test: /\.(js|jsx)$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    },
    {
      test: /\.json$/,
      loader: 'json-loader'
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'file?name=public/fonts/[name].[ext]'
    },
    {
      test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
      loader: 'url-loader?limit=100000'
    },
    {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./assets/scss")]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: 'assets/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devServer: {
    inline: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  target: 'electron-renderer'
};
