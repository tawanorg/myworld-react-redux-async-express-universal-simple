var path = require('path');
var webpack = require('webpack');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var combineLoaders = require('webpack-combine-loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    'axios',
    './src/client/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build/public'),
    filename: '[name]-[hash].js',
    publicPath: '/'
  },
  plugins: [
    new ExtractTextPlugin('styles-[hash].css'),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      filename: "[name]-[hash].js"
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
     new HtmlWebpackPlugin({
      // Required
      inject: false,
      hash: true,
      template: require('html-webpack-template'),
      // Optional
      appMountId: 'root',
      googleAnalytics: {
        trackingId: 'UA-XXXX-XX',
        pageViewOnLoad: true
      },
      meta: {
        description: 'A better default template for html-webpack-plugin.'
      },
      mobile: true,
      links: [
        'https://fonts.googleapis.com/css?family=Roboto',
        {
          href: '/apple-touch-icon.png',
          rel: 'apple-touch-icon',
          sizes: '180x180'
        },
        {
          href: '/favicon-32x32.png',
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png'
        }
      ],
      inlineManifestWebpackName: 'webpackManifest',
      scripts: [],
      title: 'My App',
    })
    ,
    new CopyWebpackPlugin([
      { 
        from: 'assets',
        to: 'assets'
      }
    ])
  ],
  module: {
    loaders: [
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src/client'),
      exclude: [nodeModulesPath]
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(
        combineLoaders([{
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        }])
      )
    }
    ]
  }
};
