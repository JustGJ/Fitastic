import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from 'screens/auth/SignIn';
import SignUp from 'screens/auth/SignUp';

const Stack = createNativeStackNavigator();

const OnBoardingStack = () => (
  <Stack.Navigator screenOptions={{ animation: 'fade' }}>
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUp}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default OnBoardingStack;
