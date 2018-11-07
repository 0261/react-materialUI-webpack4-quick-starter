const { appEntry } = require('./common-paths');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = {
  mode: 'production',
  entry: {
    app: ['babel-polyfill', `${appEntry}/index.js`],
    vendor: [
      'react',
      'react-dom',
      'react-router-dom',
      'styled-components',
      'immutable',
      '@material-ui/core',
      '@material-ui/icons',
      'aws-sdk',
      'amazon-cognito-identity-js',
      '@ckeditor/ckeditor5-build-classic',
      '@ckeditor/ckeditor5-react',
      'react-redux'
    ]
  },
  output: {
    filename: 'static/[name].[hash].js'
  }
  //   module: {
  //     rules: [
  //       {
  //         test: /\.css$/,
  //         use: ExtractTextPlugin.extract({
  //           fallback: 'style-loader',
  //           use: [
  //             {
  //               loader: 'css-loader',
  //               options: {
  //                 modules: true,
  //                 importLoaders: 1,
  //                 camelCase: true,
  //                 sourceMap: true
  //               }
  //             },
  //             {
  //               loader: 'postcss-loader',
  //               options: {
  //                 config: {
  //                   ctx: {
  //                     autoprefixer: {
  //                       browsers: 'last 2 versions'
  //                     }
  //                   }
  //                 }
  //               }
  //             }
  //           ]
  //         })
  //       }
  //     ]
  //   },
  //   plugins: [
  //     new ExtractTextPlugin({
  //       filename: 'styles/styles.[hash].css',
  //       allChunks: true
  //     })
  //   ]
};
module.exports = config;
