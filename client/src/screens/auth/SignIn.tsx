import React from 'react';
import { View } from 'react-native';
import { signIn } from 'styles';
import AuthContainer from '../../components/auth/AuthContainer';
import AuthButtons from 'components/auth/AuthButtons';
import { NavigationProps } from 'types';
import AuthForm from 'components/auth/AuthForm';
import AuthDivider from 'components/auth/AuthDivider';

const SignIn = ({ navigation }: NavigationProps) => (
  <AuthContainer type="signIn" navigation={navigation}>
    <View style={signIn.container}>
      <AuthForm type="signIn" navigation={navigation} />
      <AuthDivider />
      <AuthButtons />
    </View>
  </AuthContainer>
);

export default SignIn;
