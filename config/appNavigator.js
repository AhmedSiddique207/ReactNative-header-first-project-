import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from '../App';
import Whatsapp from '../src/components/whatsapp chat';
import Boxes from '../src/components/Boxes/Designtemp';
import Flatlist from '../src/components/flatlist/index'
import Linking from '../src/components/Linking URL/index'
import Header from '../src/components/Header/index';


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
          <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{ headerShown: false }} 
      >
        <Stack.Screen name='Home' component={App} />
        <Stack.Screen name='Student List' component={Whatsapp} />
        <Stack.Screen name='Headers' component={Header} />
        <Stack.Screen name='Flat list' component={Flatlist} />
        <Stack.Screen name='Linking OpenURL' component={Linking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
