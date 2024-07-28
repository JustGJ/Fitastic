import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import Calendar from '../screens/Calendar';
import Exercices from 'screens/Exercices';

const Tab = createBottomTabNavigator();

const MainStack = () => (
  <Tab.Navigator>
    <Tab.Screen name="Dashboard" component={Dashboard} />
    <Tab.Screen name="Exercises" component={Exercices} />
    <Tab.Screen name="Calendar" component={Calendar} />
  </Tab.Navigator>
);

export default MainStack;
