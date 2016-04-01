var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var lost = require('lost');
var webpack = require('webpack');

var environment = process.env.NODE_ENV || 'development';
var plugins = [
  new webpack.DefinePlugin({
    'process.env': { 'NODE_ENV': JSON.stringify(environment) }
  }),
  new ExtractTextPlugin('styles.css'),
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
];

module.exports = {
  devServer: {
    inline: true
  },
  entry: './app/index.js',
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js/
      },
      {
        loader: 'file?name=[name].[ext]',
        test: /\.html$/
      },
      {
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader'),
        test: /\.s(c|a)ss$/
      },
      {
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader'),
        test: /\.css$/
      },
      {
        loader: 'url?limit=25000',
        test:/\.(png|jpg|svg)$/
      }
    ]
  },
  sassLoader: {
    outputStyle: 'expanded'
  },
  postcss: function() {
    return [lost, autoprefixer];
  },
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  plugins: plugins
};


