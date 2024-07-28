import React from 'react';
import AuthContainer from 'components/OnBoardingContainer';
import { View } from 'react-native';
import { signUp } from 'styles';
import { INavigationProps } from 'types/interfaces';
import AuthFooter from 'components/auth/AuthFooter';
import AuthForm from 'components/auth/AuthForm';

const SignUp = ({ navigation }: INavigationProps) => {
  const handleNavigateToSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <AuthContainer description="Créer un compte">
      <View style={signUp.container}>
        <AuthForm type="signUp" navigation={navigation} />
      </View>
      <AuthFooter
        onPress={handleNavigateToSignIn}
        text="Déjà un compte ? Connectez-vous"
      />
    </AuthContainer>
  );
};

export default SignUp;
