import React from 'react';
import { Text, View } from 'react-native';
import { Colors } from 'styles/variables';
import TitleApp from 'components/TitleApp';
import BackgroundImage from 'components/Backgroundimage';
import { signIn } from 'styles';
import CustomButton from 'components/CustomButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { defaultStyles } from 'styles/globals';

const imageSource = require('assets/images/started-bg.jpg');

const SignIn = () => {
  const btnsConnection = [
    {
      id: 20,
      backgroundColor: Colors.white,
      label: 'Se connecter avec Google',
      labelColor: Colors.black,
      colorPressable: Colors.whiteSmoke,
      icon: <FontAwesome name="google" size={24} color={Colors.black} />,
      handlePress: () => console.log('login with google'),
    },
    {
      id: 21,
      backgroundColor: Colors.black,
      label: 'Se connecter avec Apple',
      labelColor: Colors.white,
      colorPressable: Colors.whiteSmoke,
      icon: <FontAwesome name="apple" size={24} color={Colors.white} />,
      handlePress: () => console.log('login with apple'),
    },
    {
      id: 22,
      backgroundColor: Colors.blueAzur,
      label: 'Se connecter avec Facebook',
      labelColor: Colors.white,
      colorPressable: Colors.whiteSmoke,
      icon: <FontAwesome name="facebook" size={24} color={Colors.white} />,
      handlePress: () => console.log('login with facebook'),
    },
  ];

  return (
    <BackgroundImage source={imageSource} overlay>
      <TitleApp containerStyles={signIn.titleApp} />
      <View style={defaultStyles.container}>
        {btnsConnection.map(btn => (
          <CustomButton
            key={btn.id}
            label={btn.label}
            labelColor={btn.labelColor}
            colorPressable={btn.colorPressable}
            startIcon={btn.icon}
            backgroundColor={btn.backgroundColor}
            onPress={btn.handlePress}
            customContainer={signIn.customButton}
            customText={signIn.customButtonText}
          />
        ))}
      </View>
      <Text style={signIn.text}>S'inscrire ou s'identifier avec l'émail</Text>
    </BackgroundImage>
  );
};

export default SignIn;
