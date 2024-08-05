import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Dashboard from '../screens/Dashboard';
import { FontSizes } from 'styles/variables';
import Sessions from '../screens/Sessions';

const Tab = createBottomTabNavigator();

const MainStack = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Tableau de bord"
      component={Dashboard}
      options={{
        tabBarIcon: () => (
          <AntDesign name="home" size={FontSizes.xLarge} color="black" />
        ),
        headerTitle: 'Salut Jeff !',
        headerRight: () => (
          <FontAwesome5
            name="user-circle"
            size={FontSizes.xLarge}
            color="black"
          />
        ),
      }}
    />
    <Tab.Screen
      name="Séances"
      component={Sessions}
      options={{
        tabBarIcon: () => (
          <SimpleLineIcons
            name="notebook"
            size={FontSizes.xLarge}
            color="black"
          />
        ),
      }}
    />
    <Tab.Screen
      name="Exercices"
      component={Sessions}
      options={{
        tabBarIcon: () => (
          <MaterialIcons
            name="fitness-center"
            size={FontSizes.xLarge}
            color="black"
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainStack;
