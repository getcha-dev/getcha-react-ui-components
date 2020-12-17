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
    '@storybook/preset-create-react-app',
  ],
  webpackFinal: async (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
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
                  ['@babel/preset-env', { useBuiltIns: 'usage' }],
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
          },
          {
            test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
            loader: 'file-loader',
          },
        ],
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          'react-native$': require.resolve('react-native-web'),
          'react-native-linear-gradient': 'react-native-web-linear-gradient',
        },
      },
    };
  },
};
