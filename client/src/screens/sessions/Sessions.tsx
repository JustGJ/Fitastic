import { Text, View } from 'react-native';
import React from 'react';
import { sessions } from 'styles';
import ButtonIcon from 'components/ui/buttons/ButtonIcon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from 'styles/variables';
import { INavigationProps } from 'types/navigation';

const Sessions = ({ navigation }: INavigationProps) => (
  <View style={sessions.container}>
    <Text style={sessions.title}>Aucune séance pour le moment !</Text>
    <Text style={sessions.description}>
      Crées et configures ta séance en appuyant sur le bouton +
    </Text>
    <ButtonIcon
      customContainer={sessions.button}
      colorPressable={Colors.blueAzur_opacity_06}
      backgroundColor={Colors.blueAzur}
      borderColor={Colors.blueAzur}
      raised
      onPress={() => navigation.navigate('CreateSession')}
      icon={<Ionicons name="add-sharp" size={40} color={Colors.white} />}
    />
  </View>
);

export default Sessions;
