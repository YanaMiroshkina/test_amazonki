const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpacktPlugin = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("vue-html-webpack-plugin")

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              process.env.NODE_ENV !== 'production'
                ? 'vue-style-loader'
                : MiniCssExtractPlugin.loader,
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              process.env.NODE_ENV !== 'production'
                ? 'vue-style-loader'
                : MiniCssExtractPlugin.loader,
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.pug$/,
        oneOf: [
          // это применяется к `<template lang="pug">` в компонентах Vue
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader']
          },
          // это применяется к импортам pug внутри JavaScript
          {
            use: ['raw-loader', 'pug-plain-loader']
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
        include: [
          path.resolve(__dirname, 'src/assets/fonts/')
        ],
        use: [
          {
            loader: 'file-loader?name=./src/assets/fonts/[name]/[name].[ext]'
          }
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        include: [
          path.resolve(__dirname, 'src/assets/img/')
        ],
        use: [
          'file-loader?name=[path][name].[ext]'
        ]
      },
      {
        test: /\.ico$/,
        use: [
          'file-loader?name=[path][name].[ext]'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new CleanWebpacktPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new HtmlWebpackPlugin({
      vue: true
    })
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
