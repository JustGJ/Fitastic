import React, { useState } from 'react';
import { Text, FlatList } from 'react-native';
import { Colors, FontSizes } from 'styles/variables';
import InputText from 'components/ui/inputs/InputText';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { LinearGradientBackground } from 'components/LinearGradientBackground';
import { useTranslation } from 'react-i18next';
import ButtonAddMenuAnimated from 'components/ui/buttons/ButtonAddMenuAnimated';
import { NavigationProps } from 'types';
import ExerciseListModal from 'components/exercises/exercisesList/ExerciseListModal';
import Card from 'components/ui/Card';

const CreateSessionScreen = ({ navigation }: NavigationProps) => {
  const [showExercisesList, setShowExercisesList] = useState(false);
  const [exercisesSelected, setExercisesSelected] = useState<string[]>([]);
  const { t } = useTranslation();

  const renderItemSelected = ({ item }: any) => (
    <Card>
      <Text>{t(item)}</Text>
    </Card>
  );

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
      <FlatList data={exercisesSelected} renderItem={renderItemSelected} />

      <ButtonAddMenuAnimated onPress={() => setShowExercisesList(!showExercisesList)} />
      {showExercisesList && (
        <ExerciseListModal
          exercisesSelected={exercisesSelected}
          setExercisesSelected={setExercisesSelected}
          setShowExercisesList={setShowExercisesList}
          showExercisesList={showExercisesList}
          navigation={navigation}
        />
      )}
    </LinearGradientBackground>
  );
};

export default CreateSessionScreen;
