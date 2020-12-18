const { addWebpackAlias, babelInclude, override, addWebpackModuleRule } = require('customize-cra');

const path = require('path');

module.exports = override(
  addWebpackAlias({
    'react-native': 'react-native-web',
    'react-native-linear-gradient': 'react-native-web-linear-gradient',
  }),
  addWebpackModuleRule({
    test: /\.svg$/,
    exclude: /node_modules/,
    use: [
      {
        loader: '@svgr/webpack',
      },
    ],
  }),
  babelInclude([
    path.resolve('src'), // make sure you link your own source
    path.resolve('node_modules/react-native-web-linear-gradient'),
    path.resolve('node_modules/react-router-native'),
  ]),
);
