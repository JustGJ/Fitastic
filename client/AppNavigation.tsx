import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from 'navigations/AuthStack';
import MainStack from 'navigations/MainStack';
import ProfileStack from 'navigations/ProfileStack';
import Splash from 'screens/Splash';

const Stack = createNativeStackNavigator();

const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="MainStack" component={MainStack} options={{ headerShown: false }} />
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={ProfileStack} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
