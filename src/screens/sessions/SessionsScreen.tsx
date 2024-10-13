import React from 'react';
import { Text, View } from 'react-native';
import { card, sessions } from 'styles';
import ButtonIcon from 'components/ui/buttons/ButtonIcon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors, FontSizes } from 'styles/variables';
import { LinearGradientBackground } from 'components/LinearGradientBackground';
import { useTranslation } from 'react-i18next';
import { NavigationProps } from 'types/routes';
import Entypo from 'react-native-vector-icons/Entypo';

const SessionsScreen = ({ navigation }: NavigationProps) => {
  const { t } = useTranslation();
  return (
    <LinearGradientBackground>
      <View style={card.container}>
        <Text style={sessions.noSessions}>{t('screens.sessions.noSessions')}</Text>
        <Text style={sessions.description}>{t('screens.sessions.createSession')}</Text>
      </View>
      <View style={sessions.note}>
        <Entypo name="info-with-circle" size={FontSizes.large} color={Colors.blueAzur} />
        <Text style={sessions.noteText}>Une séance est un enchaînement d'exercices.</Text>
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

export default SessionsScreen;
