import React from 'react';
import ButtonText from 'components/ui/buttons/ButtonText';
import { signIn } from 'styles';
import { Colors, FontSizes } from 'styles/variables';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type Provider = 'google' | 'apple' | 'facebook';

interface IGetAuthButtonsParams {
  handleLoginPress: (provider: Provider) => void;
}

export const getAuthButtons = ({ handleLoginPress }: IGetAuthButtonsParams) => [
  {
    id: 20,
    backgroundColor: Colors.white,
    label: 'Se connecter avec Google',
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
    label: 'Se connecter avec Apple',
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
    label: 'Se connecter avec Facebook',
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

const AuthButtons = () => {
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
  const buttons = getAuthButtons({ handleLoginPress });

  return (
    <>
      {buttons.map(btn => (
        <ButtonText
          key={btn.id}
          label={btn.label}
          labelColor={btn.labelColor}
          colorPressable={btn.colorPressable}
          startIcon={btn.icon}
          backgroundColor={btn.backgroundColor}
          onPress={btn.handlePress}
          customContainer={signIn.button}
          customText={signIn.buttonText}
        />
      ))}
    </>
  );
};

export default AuthButtons;
