import React from 'react';
import { Colors } from 'styles/variables';
import AuthContainer from 'components/OnBoardingContainer';
import { View } from 'react-native';
import { signUp } from 'styles';
import ButtonText from 'components/ui/buttons/ButtonText';
import { INavigationProps } from 'types/interfaces';
import AuthInputs from 'components/auth/AuthInputs';
import AuthFooter from 'components/auth/AuthFooter';

const SignUp = ({ navigation }: INavigationProps) => {
  const handleNavigateToSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <AuthContainer description="Créer un compte">
      <View style={signUp.container}>
        <AuthInputs type="signUp" />
      </View>
      <View style={signUp.buttonContainer}>
        <ButtonText
          label="Créer un compte"
          backgroundColor={Colors.blueAzur}
          colorPressable={Colors.whiteSmoke}
        />
      </View>
      <AuthFooter
        onPress={handleNavigateToSignIn}
        text="Déjà un compte ? Connectez-vous"
      />
    </AuthContainer>
  );
};

export default SignUp;
