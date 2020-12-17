import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { GetchaButton, GetchaModal } from './native';

function FirstTab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <GetchaButton />
    </View>
  );
}

function SecondTab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Second Tab Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="First" component={FirstTab} />
        <Tab.Screen name="Second" component={SecondTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
