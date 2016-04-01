var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  entry: [
    './src/app/index.ts'
  ],

  output: {
    path: './dist',
    publicPath: '/assets/',
    filename: 'js/bundle.js'
  },

  devServer: {
    contentBase: './dist',
    inline: true, //Enable watch and live reload
    host: 'localhost',
    port: 8080,
    open: true
  },

  devtool: 'inline-source-map',

  module: {
    loaders: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw'
      },
      {
        test: /\.(ts)$/,
        exclude: /node_modules/,
        loader: 'ts'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss')
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: /node_modules/,
        loader: 'url?limit=1000name=[path][name].[ext]?[hash]./images/file.png'
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('css/styles.css'),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      hash: true
    })
  ],
};