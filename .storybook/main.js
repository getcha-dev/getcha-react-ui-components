const path = require('path');

module.exports = {
  stories: ['./stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs/preset',
    {
      name: '@storybook/addon-essentials',
      options: {
        controls: false,
      },
    },
    '@storybook/addon-knobs/register',
  ],
  webpackFinal: async (config) => {
    const assetRule = config.module.rules.find(({ test }) => test.test('.svg'));
    assetRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      loader: require.resolve('@svgr/webpack'),
    });

    config.module.rules.push({
      test: /\.js$/,

      exclude: /node_modules[/\\](?!react-native-vector-icons|react-native-safe-area-view)/,
      use: {
        loader: 'babel-loader',
        options: {
          // Disable reading babel configuration
          babelrc: false,
          configFile: false,

          // The configuration for compilation
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['> 1%', 'last 2 versions', 'ie 11'],
                },
                useBuiltIns: 'usage',
                corejs: 3,
              },
            ],
            '@babel/preset-react',
            '@babel/preset-flow',
            '@babel/preset-typescript',
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-object-rest-spread',
          ],
        },
      },
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native$': require.resolve('react-native-web'),
      'react-native-linear-gradient': 'react-native-web-linear-gradient',
      'react-native-svg': 'react-native-svg/lib/commonjs/ReactNativeSVG.web',
    };

    return config;
  },
};
