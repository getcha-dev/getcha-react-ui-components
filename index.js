/** React Native App index
 * yarn ios or yarn android or yarn start:metro
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name } from './app.json';

AppRegistry.registerComponent(name, () => App);
