import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import OnBoardingStack from './src/navigations/OnBoardingStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainStack from 'navigations/MainStack';
import ProfileStack from 'navigations/ProfileStack';

const Stack = createNativeStackNavigator();

const AppStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen
        name="Onboarding"
        component={OnBoardingStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={MainStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

const App = () => <AppStack />;

export default App;
