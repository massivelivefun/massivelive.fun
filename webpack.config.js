const webpack = require('webpack');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, args) => {
  const isProductionMode = args.mode === 'production';

  return {
    entry: './scripts/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProductionMode
        ? '[name].[contenthash].js'
        : '[name].[hash].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './templates/index.html',
      }),
      new webpack.ProvidePlugin({
        TextDecoder: ['text-encoding', 'TextDecoder'],
        TextEncoder: ['text-encoding', 'TextEncoder'],
      }),
      new WasmPackPlugin({
        crateDirectory: path.resolve(__dirname, 'rust'),
        extraArgs: '--target web',
        outDir: "pkg",
        outName: "massivelive_fun"
      }),
    ],
    mode: 'development',
    experiments: {
      asyncWebAssembly: true,
    },
  };
};
