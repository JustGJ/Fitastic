import { Text, View } from 'react-native';
import React from 'react';
import { signIn } from 'styles';
import Divider from 'components/ui/divider';
import { useTranslation } from 'react-i18next';

const AuthDivider = () => {
  const { t } = useTranslation();
  return (
    <View style={signIn.orContainer}>
      <Divider width="43%" />
      <Text style={signIn.orText}>{t('screens.auth.signIn.or')}</Text>
      <Divider width="43%" />
    </View>
  );
};

export default AuthDivider;
