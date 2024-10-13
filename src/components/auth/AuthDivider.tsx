import { Text, View } from 'react-native';
import React from 'react';
import Divider from 'components/ui/divider';
import { useTranslation } from 'react-i18next';
import { authDivider } from 'styles';

const AuthDivider = () => {
  const { t } = useTranslation();
  return (
    <View style={authDivider.orContainer}>
      <Divider width="43%" />
      <Text style={authDivider.orText}>{t('screens.auth.login.or')}</Text>
      <Divider width="43%" />
    </View>
  );
};

export default AuthDivider;
