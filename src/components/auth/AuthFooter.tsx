import React from 'react';
import { Text } from 'react-native';
import { authFooter } from 'styles';

interface IFooterProps {
  onPress: () => void;
  text: string;
}

const AuthFooter = ({ onPress, text }: IFooterProps) => (
  <Text onPress={onPress} style={authFooter.text}>
    {text}
  </Text>
);

export default AuthFooter;
