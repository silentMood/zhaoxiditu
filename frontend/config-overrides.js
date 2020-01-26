const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addWebpackAlias,
  addBabelPlugin,
  addPostcssPlugins,
} = require('customize-cra');

const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
module.exports = override(
  addDecoratorsLegacy(),
  disableEsLint(),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    pages: path.resolve(__dirname, 'src/pages'),
    components: path.resolve(__dirname, 'src/components'),
    layouts: path.resolve(__dirname, 'src/layouts'),
    store: path.resolve(__dirname, 'src/store'),
    services: path.resolve(__dirname, 'src/services'),
    utils: path.resolve(__dirname, 'src/utils'),
  }),
  addPostcssPlugins([
    require('postcss-normalize')(),
    require('postcss-pxtorem')({
      rootValue: 16,
      propList: ['margin*', 'padding*', 'width', 'height', 'top', 'left', 'bottom', 'right']
    })
  ]),
  addBabelPlugin([
    'import',
    {
      libraryName: 'antd-mobile',
      style: 'css',
    },
  ]),
);
