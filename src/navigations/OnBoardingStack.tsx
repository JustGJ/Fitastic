import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from 'screens/GetStarted';
import SignIn from 'screens/SignIn';

const Stack = createNativeStackNavigator();

const OnBoardingStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="GetStarted"
      component={GetStarted}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default OnBoardingStack;
