import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { IS_DEV } from '../constants';
import { RuleSetRule } from 'webpack';

const scssRegex = /\.s?[ac]?ss$/;
const scssModuleRegex = /\.module\.s?[ac]?ss$/;

export const scssLoader: RuleSetRule = {
  test: scssRegex,
  exclude: /node_modules/,
  oneOf: [
    {
      test: scssModuleRegex,
      use: [
        {
          loader: IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
        },
        {
          loader: 'css-loader',
          options: {
            modules: {
              mode: 'local',
              localIdentName: '[folder]__[local]--[hash:base64:5]',
            },
          },
        },
        'postcss-loader',
        'sass-loader',
      ],
    },
    {
      use: [
        {
          loader: IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
        },
        'css-loader',
        'postcss-loader',
        'sass-loader',
      ],
    },
  ],
};
