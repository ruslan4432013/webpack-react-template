import { RuleSetRule } from 'webpack';

const tsRegex = /\.tsx?$/;

export const tsLoader: RuleSetRule = {
  test: tsRegex,
  use: [
    {
      loader: 'swc-loader',
    },
  ],
};
