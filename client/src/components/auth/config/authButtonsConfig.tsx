import React from 'react';
import { Colors, FontSizes } from 'styles/variables';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export type Provider = 'google' | 'apple' | 'facebook';

const handleLoginPress = (provider: Provider) => {
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
    label: 'screens.auth.signIn.signInWithGoogle',
    labelColor: Colors.black,
    colorPressable: Colors.whiteSmoke,
    icon: (
      <FontAwesome name="google" size={FontSizes.xLarge} color={Colors.black} />
    ),
    handlePress: () => handleLoginPress('google'),
  },
  {
    id: 21,
    backgroundColor: Colors.black,
    label: 'screens.auth.signIn.signInWithApple',
    labelColor: Colors.white,
    colorPressable: Colors.whiteSmoke,
    icon: (
      <FontAwesome name="apple" size={FontSizes.xLarge} color={Colors.white} />
    ),
    handlePress: () => handleLoginPress('apple'),
  },
  {
    id: 22,
    backgroundColor: Colors.blueAzur,
    label: 'screens.auth.signIn.signInWithFacebook',
    labelColor: Colors.white,
    colorPressable: Colors.whiteSmoke,
    icon: (
      <FontAwesome
        name="facebook"
        size={FontSizes.xLarge}
        color={Colors.white}
      />
    ),
    handlePress: () => handleLoginPress('facebook'),
  },
];
