var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './app/app.js',
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
    }, {
      test: /\.png|\.svg$/,
      loaders: ['file-loader']
    }]
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
