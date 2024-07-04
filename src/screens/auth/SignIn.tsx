import React from 'react';
import { Text, View } from 'react-native';
import { Colors } from 'styles/variables';
import { signIn } from 'styles';
import ButtonText from 'components/ui/buttons/ButtonText';
import OnBoardingContainer from 'components/OnBoardingContainer';
import Divider from 'components/ui/divider';
import { INavigationProps } from 'types/interfaces';
import AuthInputs from 'components/auth/AuthInputs';
import AuthButtons from 'components/auth/AuthButtons';
import AuthFooter from 'components/auth/AuthFooter';

const SignIn = ({ navigation }: INavigationProps) => {
  const handleNavigateToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <OnBoardingContainer description="Ton défie, ta victoire">
      <View style={signIn.container}>
        <AuthInputs type="signIn" />
        <ButtonText
          label="Se connecter"
          backgroundColor={Colors.blueAzur}
          colorPressable={Colors.whiteSmoke}
        />
        <View style={signIn.orContainer}>
          <Divider width="43%" />
          <Text style={signIn.orText}>Ou</Text>
          <Divider width="43%" />
        </View>
        <AuthButtons />
      </View>
      <AuthFooter
        onPress={handleNavigateToSignUp}
        text="Besoin d'un compte ? Inscrivez-vous"
      />
    </OnBoardingContainer>
  );
};

export default SignIn;
