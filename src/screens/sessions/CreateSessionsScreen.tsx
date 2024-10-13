import React, { useState } from 'react';
import { View, Text, Modal } from 'react-native';
import { Colors, FontSizes } from 'styles/variables';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputText from 'components/ui/inputs/InputText';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { modalExercises } from 'styles';
import ButtonIcon from 'components/ui/buttons/ButtonIcon';
import { NavigationProps } from 'types/routes';
import { LinearGradientBackground } from 'components/LinearGradientBackground';
import { useTranslation } from 'react-i18next';
import ButtonAddMenuAnimated from 'components/ui/buttons/ButtonAddMenuAnimated';
import ExercisesList from 'components/exercises/ExercisesList';

const CreateSessionScreen = ({ navigation }: NavigationProps) => {
  const [showExercisesList, setShowExercisesList] = useState(false);
  const { t } = useTranslation();
  return (
    <LinearGradientBackground>
      <InputText
        label={t('screens.createSession.name')}
        labelColor={Colors.black_opacity_09}
        placeholder={t('screens.createSession.namePlaceholder')}
        textColor={Colors.black_opacity_09}
        borderBottomColor={Colors.grey_opacity_06}
        borderColor={Colors.grey_opacity_06}
        outlined
        leftIcon={
          <SimpleLineIcons name="notebook" size={FontSizes.small} color={Colors.black_opacity_06} />
        }
      />
      <ButtonAddMenuAnimated onPress={() => setShowExercisesList(!showExercisesList)} />
      <Modal animationType="slide" transparent={true} visible={showExercisesList}>
        <View style={modalExercises.modalView}>
          <View style={modalExercises.header}>
            <Text style={modalExercises.title}>Ajouter exercices</Text>
            <ButtonIcon
              icon={<Ionicons name="close" size={24} color={Colors.black} />}
              backgroundColor={Colors.white}
              onPress={() => setShowExercisesList(!showExercisesList)}
              colorPressable={Colors.whiteSmoke}
              padding={5}
              customContainer={modalExercises.buttonClose}
            />
          </View>
          <View>
            <ExercisesList navigation={navigation} />
          </View>
        </View>
      </Modal>
    </LinearGradientBackground>
  );
};

export default CreateSessionScreen;
