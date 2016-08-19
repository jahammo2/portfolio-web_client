var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var lost = require('lost');
var path = require('path');
var DotenvPlugin = require('webpack-dotenv-plugin');

module.exports = {
  entry: [
    'whatwg-fetch',
    path.resolve(__dirname, 'src/index.js')
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      },
      {
        test: /\.s(c|a)ss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader')
      },
      {
        test: /\.(svg|png|jpg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
    devtool: 'eval',
    proxy: {
      '/uploads/*': {
        target: 'http://localhost:3000'
      }
    }
  },
  devtool: '#source-map',
  plugins: [
    new DotenvPlugin({
      sample: './.env.default',
      path: './.env'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: 'body',
      template: 'src/index.html',
      title: 'Jordan Hammond'
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        'HOST': JSON.stringify(process.env.HOST)
      }
    }),
    new DotenvPlugin({
      sample: './.env.default',
      path: './.env'
    }),
  ],
  postcss: function () {
    return [lost, autoprefixer];
  }
};
