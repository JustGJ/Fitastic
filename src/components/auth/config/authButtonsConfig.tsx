import React from 'react';
import { Colors, FontSizes } from 'styles/variables';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type AuthProvider = 'google' | 'apple' | 'facebook';

const handleLoginPress = (provider: AuthProvider) => {
  switch (provider) {
    case 'google':
      console.log('login with google');
      break;
    case 'apple':
      console.log('login with apple');
      break;
    case 'facebook':
      console.log('login with facebook');
      break;
  }
};
export const authButtons = [
  {
    id: 20,
    backgroundColor: Colors.white,
    label: 'screens.auth.login.withGoogle',
    labelColor: Colors.black,
    colorPressable: Colors.whiteSmoke,
    icon: <FontAwesome name="google" size={FontSizes.xLarge} color={Colors.black} />,
    handlePress: () => handleLoginPress('google'),
  },
  {
    id: 21,
    backgroundColor: Colors.black,
    label: 'screens.auth.login.withApple',
    labelColor: Colors.white,
    colorPressable: Colors.whiteSmoke,
    icon: <FontAwesome name="apple" size={FontSizes.xLarge} color={Colors.white} />,
    handlePress: () => handleLoginPress('apple'),
  },
  {
    id: 22,
    backgroundColor: Colors.blueAzur,
    label: 'screens.auth.login.withFacebook',
    labelColor: Colors.white,
    colorPressable: Colors.whiteSmoke,
    icon: <FontAwesome name="facebook" size={FontSizes.xLarge} color={Colors.white} />,
    handlePress: () => handleLoginPress('facebook'),
  },
];
