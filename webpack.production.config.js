var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
console.log('WEBPACK CONFIG PRODUCTION');
var config = {
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'dist.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [node_modules_dir],
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}

module.exports = config;

