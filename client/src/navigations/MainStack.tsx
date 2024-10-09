import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Dashboard from '../screens/Dashboard';
import { Colors, FontSizes } from 'styles/variables';
import SessionsStack from './SessionsStack';
import DashboardHeader from 'components/DashboardHeader';
import ExercisesStack from './ExercisesStack';

const Tab = createBottomTabNavigator();

const MainStack = () => (
  <Tab.Navigator initialRouteName="Séances">
    <Tab.Screen
      name="Tableau de bord"
      component={Dashboard}
      options={{
        tabBarIcon: () => <AntDesign name="home" size={FontSizes.xLarge} color={Colors.black} />,
        header: () => <DashboardHeader />,
      }}
    />
    <Tab.Screen
      name="Séances"
      component={SessionsStack}
      options={{
        headerShown: false,
        tabBarIcon: () => (
          <SimpleLineIcons name="notebook" size={FontSizes.xLarge} color={Colors.black} />
        ),
      }}
    />
    <Tab.Screen
      name="Mes exercices"
      component={ExercisesStack}
      options={{
        headerShown: false,
        tabBarIcon: () => (
          <MaterialIcons name="fitness-center" size={FontSizes.xLarge} color={Colors.black} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainStack;
