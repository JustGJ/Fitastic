import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SessionsScreen from '../screens/sessions/SessionsScreen';
import CreateSessionsScreen from 'screens/sessions/CreateSessionsScreen';

const Stack = createNativeStackNavigator();

const SessionsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Sessions" component={SessionsScreen} options={{ headerTitle: 'Séances' }} />
    <Stack.Screen
      name="CreateSession"
      component={CreateSessionsScreen}
      options={{
        headerTitle: 'Nouvelle séance',
        headerBackTitleVisible: false,
      }}
    />
  </Stack.Navigator>
);

export default SessionsStack;
