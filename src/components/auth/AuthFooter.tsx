import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';
import { authFooter } from 'styles';

interface FooterProps {
  onPress: () => void;
  text: string;
}

const AuthFooter = ({ onPress, text }: FooterProps) => {
  const { t } = useTranslation();
  return (
    <Text style={authFooter.text} onPress={onPress}>
      {t(text)}
    </Text>
  );
};

export default AuthFooter;
