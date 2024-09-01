import React from 'react';
import AuthContainer from 'components/auth/AuthContainer';
import { View } from 'react-native';
import { signUp } from 'styles';
import { NavigationProps } from 'types';
import AuthForm from 'components/auth/AuthForm';

const SignUp = ({ navigation }: NavigationProps) => (
  <AuthContainer type="signUp" navigation={navigation}>
    <View style={signUp.container}>
      <AuthForm type="signUp" navigation={navigation} />
    </View>
  </AuthContainer>
);

export default SignUp;
