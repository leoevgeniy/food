'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    filename: 'script.js',
    path: 'c:/mamp/htdocs/food/js'
  },
  watch: true, 

  devtool: "source-map",

  module: {}
};
