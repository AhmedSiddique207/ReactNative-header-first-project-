/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import { AppRegistry } from 'react-native';
import AppNavigator from './config/appNavigator'
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigator);
