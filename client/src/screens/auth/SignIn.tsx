import React from 'react';
import { Text, View } from 'react-native';
import { signIn } from 'styles';
import OnBoardingContainer from '../../components/OnBoardingContainer';
import Divider from 'components/ui/divider';
import AuthButtons from 'components/auth/AuthButtons';
import AuthFooter from 'components/auth/AuthFooter';
import { INavigationProps } from 'types/navigation';
import AuthForm from 'components/auth/AuthForm';

const SignIn = ({ navigation }: INavigationProps) => {
  const handleNavigateToSignUp = () => {
    navigation.navigate('SignUp');
  };
  return (
    <OnBoardingContainer description="Ton défie, ta victoire">
      <View style={signIn.container}>
        <AuthForm type="signIn" navigation={navigation} />
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
