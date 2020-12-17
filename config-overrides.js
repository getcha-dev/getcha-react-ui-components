const { addWebpackAlias, babelInclude, override } = require('customize-cra');

const path = require('path');

module.exports = override(
  addWebpackAlias({
    'react-native': 'react-native-web',
    'react-native-linear-gradient': 'react-native-web-linear-gradient',
  }),
  babelInclude([
    path.resolve('src'), // make sure you link your own source
    path.resolve('node_modules/react-native-web-linear-gradient'),
    path.resolve('node_modules/react-router-native'),
  ]),
);
