import path from 'node:path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { loaders } from './loaders';

export const config: webpack.Configuration = {
  entry: path.resolve(__dirname, '../src/index'),
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: loaders,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '~': path.resolve('src'),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].[hash:4].css' }),
    new webpack.ProgressPlugin({
      activeModules: true,
      entries: true,
      modules: true,
      profile: true,
      dependencies: true,
      dependenciesCount: 10000,
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      title: 'hello-webpack',
      template: path.resolve(__dirname, '../index.html'),
    }),
  ],
};
