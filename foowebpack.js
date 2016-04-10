var autoprefixer = require('autoprefixer');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var lost = require('lost');
var webpack = require('webpack');

var environment = process.env.NODE_ENV || 'development';

var plugins = [
  new CleanWebpackPlugin(['dist']),
  new webpack.DefinePlugin({
    'process.env': { 'NODE_ENV': JSON.stringify(environment) }
  }),
  new ExtractTextPlugin('styles.css'),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    hash: environment !== 'development',
    inject: 'body',
    template: 'app/index.html',
    title: 'Portfolio'
  }),
  new BrowserSyncPlugin(
    {
      host: 'localhost',
      port: 8081,
      proxy: 'http://localhost:8081/'
    },
    {
      reload: false
    }
  )
];

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  devServer: {
    proxy: {
      '/api/*': {
        target: 'http://localhost:3000'
      }
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.s(c|a)ss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!resolve-url!sass-loader')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
      }
    ]
  },
  sassLoader: {
    outputStyle: 'expanded'
  },
  postcss: function() {
    return [lost, autoprefixer];
  },
  plugins: plugins,
  resolveLoader: {
    root: './dist/node_modules'
  }
};
