import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { sessions } from 'styles';
import ButtonIcon from 'components/ui/buttons/ButtonIcon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from 'styles/variables';
import { NavigationProps } from 'types';
import { LinearGradientBackground } from 'components/LinearGradientBackground';
import { useTranslation } from 'react-i18next';

const Sessions = ({ navigation }: NavigationProps) => {
  const { t } = useTranslation();
  return (
    <LinearGradientBackground>
      <View style={card.container}>
        <Text style={sessions.title}>{t('screens.intro.text.introText')}</Text>
        <Text style={sessions.title}>Aucune séance pour le moment !</Text>
        <Text style={sessions.description}>
          Crées et configures ta séance en appuyant sur le bouton +
        </Text>
      </View>
      <ButtonIcon
        customContainer={sessions.button}
        colorPressable={Colors.blueAzur_opacity_06}
        backgroundColor={Colors.blueAzur}
        borderColor={Colors.blueAzur}
        raised
        onPress={() => navigation.navigate('CreateSession')}
        icon={<Ionicons name="add-sharp" size={40} color={Colors.white} />}
      />
    </LinearGradientBackground>
  );
};

export const card = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 15,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowColor: Colors.grey_opacity_06,
    padding: 15,
  },
});

export default Sessions;
