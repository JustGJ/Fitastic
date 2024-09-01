import { Text, View } from 'react-native';
import React from 'react';
import { titleApp } from 'styles';
import { useTranslation } from 'react-i18next';

interface TitleAppProps {
  containerStyles?: object;
  description?: string;
}

const TitleApp = ({
  containerStyles,
  description = 'Ton défie, ta victore',
}: TitleAppProps) => {
  const { t } = useTranslation();
  return (
    <View style={containerStyles}>
      <Text style={titleApp.title}>Fitastic</Text>
      <Text style={titleApp.description}>{t(description)}</Text>
    </View>
  );
};

export default TitleApp;
