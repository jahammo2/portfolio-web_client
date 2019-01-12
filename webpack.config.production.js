const webpack = require('webpack');
const config = require('./webpack.config.base');

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production'),
      'HOST': JSON.stringify(process.env.HOST)
    }
  })
]);

config.mode = 'production';

module.exports = config;
