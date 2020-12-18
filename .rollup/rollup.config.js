import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import svgr from '@svgr/rollup';
import url from 'rollup-plugin-url';

const extensions = ['js', '.jsx', '.ts', '.tsx'];

process.env.BABEL_ENV = 'production';

const WEB_BUNDLE = {
  input: './src/web/index.ts',
  external: ['styled-components', 'react', 'react-dom'],
  output: [
    {
      file: './dist/getcha-react-ui-components.js',
      format: 'es',
    },
  ],
  plugins: [
    external(),
    resolve({ extensions }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react/index.js': [
          'cloneElement',
          'createContext',
          'Component',
          'createElement',
        ],
        'node_modules/react-dom/index.js': ['render', 'hydrate'],
        'node_modules/react-is/index.js': [
          'isElement',
          'isValidElementType',
          'ForwardRef',
          'typeOf',
        ],
      },
    }),
    babel({
      configFile: './.rollup/.babelrc',
      presets: [['react-app', { flow: false, typescript: true }]],
      extensions,
      include: ['src/**/*'],
      runtimeHelpers: true,
    }),
    svgr(),
    url(),
  ],
};

const NATIVE_BUNDLE = {
  input: './src/native/index.ts',
  external: ['styled-components', 'react', 'react-dom', 'react-native', 'react-native-svg'],
  output: [
    {
      file: './native/dist/getcha-react-ui-components.native.js',
      format: 'es',
    },
  ],
  plugins: [
    external(),
    resolve({ extensions }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react/index.js': [
          'cloneElement',
          'createContext',
          'Component',
          'createElement',
        ],
        'node_modules/react-dom/index.js': ['render', 'hydrate'],
        'node_modules/react-is/index.js': [
          'isElement',
          'isValidElementType',
          'ForwardRef',
          'typeOf',
        ],
      },
    }),
    babel({
      configFile: './.rollup/.babelrc',
      extensions,
      include: ['src/**/*'],
      runtimeHelpers: true,
    }),
    url(),
  ],
};

// const COMMON = {
//   plugins: [
//     external(),
//     resolve({ extensions }),
//     commonjs({
//       include: 'node_modules/**',
//       namedExports: {
//         'node_modules/react/index.js': [
//           'cloneElement',
//           'createContext',
//           'Component',
//           'createElement',
//         ],
//         'node_modules/react-dom/index.js': ['render', 'hydrate'],
//         'node_modules/react-is/index.js': [
//           'isElement',
//           'isValidElementType',
//           'ForwardRef',
//           'typeOf',
//         ],
//       },
//     }),
//     babel({
//       configFile: './.rollup/.babelrc',
//       presets: [['react-app', { flow: false, typescript: true }]],
//       extensions,
//       include: ['src/**/*'],
//       runtimeHelpers: true,
//     }),
//     svgr(),
//     url(),
//   ],
// };

export default [Object.assign({}, WEB_BUNDLE), Object.assign({}, NATIVE_BUNDLE)];
