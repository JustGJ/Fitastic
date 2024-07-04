import { Text, View } from 'react-native';
import React from 'react';
import { titleApp } from 'styles';

interface TitleAppProps {
  containerStyles?: object;
  description?: string;
}

const TitleApp = ({
  containerStyles,
  description = 'Ton défie, ta victore',
}: TitleAppProps) => (
  <View style={containerStyles}>
    <Text style={titleApp.title}>Fitastic</Text>
    <Text style={titleApp.description}>{description}</Text>
  </View>
);

export default TitleApp;
