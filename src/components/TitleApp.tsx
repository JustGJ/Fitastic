import { Text, View } from 'react-native';
import React from 'react';
import { titleApp } from '/styles';

interface TitleAppProps {
  containerStyles?: object;
}

const TitleApp = ({ containerStyles }: TitleAppProps) => (
  <View style={containerStyles}>
    <Text style={titleApp.title}>Fitastic</Text>
    <Text style={titleApp.description}>Ton défie, ta victoire</Text>
  </View>
);

export default TitleApp;
