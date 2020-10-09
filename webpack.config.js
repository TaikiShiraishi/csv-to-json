const { resolve } = require('path');
const webpack = require('webpack');

/** 基底ディレクトリ */
const baseDir = './';

/** build 時の出力ディレクトリ */
const distDir = './';

const targetDir = distDir;

module.exports = {
  entry: {
    main: resolve(__dirname, `${baseDir}/bundle.js`),
  },
  output: {
    path: resolve(__dirname, `${targetDir}`),
    filename: '[name].bundle.js',
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  performance: {
    hints: false,
  },
};
