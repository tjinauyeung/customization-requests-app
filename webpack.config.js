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
      test: /\.css$/,
      loader: 'style!css?importLoaders=1!postcss'
    },
    {
      test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
      loaders: ['file-loader']
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
  ]
};
