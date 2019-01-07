module.exports = (function(environment) {
  console.log(environment);
  switch (environment) {
  case 'production':
    return require('./webpack.config.production');

  default:
    return require('./webpack.config.development');
  }
})(process.env.NODE_ENV);
