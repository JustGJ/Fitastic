import React from 'react';
import { View } from 'react-native';
import { login } from 'styles';
import AuthContainer from '../../components/auth/AuthContainer';
import AuthButtons from 'components/auth/AuthButtons';
import { NavigationProps } from 'types';
import AuthForm from 'components/auth/AuthForm';
import AuthDivider from 'components/auth/AuthDivider';

const Login = ({ navigation }: NavigationProps) => (
  <AuthContainer type="login" navigation={navigation}>
    <View style={login.container}>
      <AuthForm type="login" navigation={navigation} />
      <AuthDivider />
      <AuthButtons />
    </View>
  </AuthContainer>
);

export default Login;
