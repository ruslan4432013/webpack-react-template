import { IS_DEV } from '../constants';
import { RuleSetRule } from 'webpack';

const imageRegex = /\.(png|jpg|jpeg|gif)$/;

export const imageLoader: RuleSetRule = {
  test: imageRegex,
  type: 'asset/resource',
  generator: {
    filename: `images/${IS_DEV ? '[name][ext]' : '[name]-[hash][ext]'}`,
  },
};
