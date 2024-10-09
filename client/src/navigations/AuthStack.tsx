import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from 'screens/auth/Login';
import Register from 'screens/auth/Register';

const Stack = createNativeStackNavigator();

const OnBoardingStack = () => (
  <Stack.Navigator screenOptions={{ animation: 'fade' }}>
    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default OnBoardingStack;
