var path = require('path');

module.exports = {
  entry: './app/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
  	rules: [
  		{ 
  			test: /\.js$/, 
  			exclude: /node_modules/, 
  			loader: "babel-loader" 
  		},
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
  	]
  }
  
};