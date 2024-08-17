import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Dashboard from '../screens/Dashboard';
import { Colors, FontSizes } from 'styles/variables';
import SessionsStack from './SessionsStack';
import Exercices from 'screens/Exercices';
import { useAuth } from 'contexts/AuthContext';

const Tab = createBottomTabNavigator();

const MainStack = () => {
  const { currentUser } = useAuth();
  return (
    <Tab.Navigator initialRouteName="Séances">
      <Tab.Screen
        name="Tableau de bord"
        component={Dashboard}
        options={{
          tabBarIcon: () => (
            <AntDesign name="home" size={FontSizes.xLarge} color="black" />
          ),
          headerTitle: `Salut ${currentUser?.name} !`,
          headerRight: () => (
            <FontAwesome5
              name="user-circle"
              size={FontSizes.xLarge}
              color={Colors.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Séances"
        component={SessionsStack}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <SimpleLineIcons
              name="notebook"
              size={FontSizes.xLarge}
              color={Colors.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Mes exercices"
        component={Exercices}
        options={{
          headerStyle: {
            shadowOpacity: 0,
          },
          tabBarIcon: () => (
            <MaterialIcons
              name="fitness-center"
              size={FontSizes.xLarge}
              color={Colors.black}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainStack;
