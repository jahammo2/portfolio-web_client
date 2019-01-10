const webpack = require('webpack');
const config = require('./webpack.config.base');

config.devServer = {
  contentBase: './dist',
  historyApiFallback: true,
  hot: true,
  inline: true,
  proxy: {
    '/api': {
      changeOrigin: true,
      target: 'http://[::1]:3000'
    }
  }
};

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('development'),
      'HOST': JSON.stringify(process.env.HOST)
    }
  })
]);

config.mode = 'development';
config.devtool = 'source-map';

module.exports = config;
