import React from 'react';
import AuthContainer from 'components/auth/AuthContainer';
import { View } from 'react-native';
import { NavigationProps } from 'types';
import AuthForm from 'components/auth/AuthForm';
import { register } from 'styles';

const Register = ({ navigation }: NavigationProps) => (
  <AuthContainer type="register" navigation={navigation}>
    <View style={register.container}>
      <AuthForm type="register" navigation={navigation} />
    </View>
  </AuthContainer>
);

export default Register;
