/*
 * @Author: leally Xie 
 * @Date: 2019-11-25 23:33:02 
 * @Last Modified by: leally Xie
 * @Last Modified time: 2019-12-01 23:44:48
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'js/app.js'
  },
  resolve: {
    alias: {
      page: path.resolve(__dirname, 'src/page'),
      component: path.resolve(__dirname, 'src/component')
    }
  },
  devServer: {
    port: 8086,
    historyApiFallback: {
      index: '/dist/index.html'
    }
  },
  module: {
    rules: [
      // react 文件的处理
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      // css 文件的处理
      {
        test: /\.css$/i,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        }),
      },
      // sass 文件的处理
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      // 图片资源的配置
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'resource/[name].[ext]'
            }
          }
        ]
      },
      // 处理字体文件
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'resource/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // 处理HTML文件
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './static/favicon.ico'
    }),
    // 处理css文件
    new ExtractTextPlugin("css/[name].css"),
    // 提取公共模块
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'js/base.js'
    })
  ]
};
