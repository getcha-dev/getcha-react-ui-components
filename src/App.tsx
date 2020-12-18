import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FirstTab, SecondTab, SVGIconsTab } from './components';

const Tab = createBottomTabNavigator();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="First" component={FirstTab} />
        <Tab.Screen name="Second" component={SecondTab} />
        <Tab.Screen name="SVGIcons" component={SVGIconsTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
