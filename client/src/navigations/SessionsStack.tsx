import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sessions from '../screens/sessions/Sessions';
import CreateSession from 'screens/sessions/CreateSessions';

const Stack = createNativeStackNavigator();

const SessionsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Sessions" component={Sessions} options={{ headerTitle: 'Séances' }} />
    <Stack.Screen
      name="CreateSession"
      component={CreateSession}
      options={{
        headerTitle: 'Nouvelle séance',
        headerBackTitleVisible: false,
      }}
    />
  </Stack.Navigator>
);

export default SessionsStack;
