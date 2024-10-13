import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, ScrollView } from 'react-native';
import { exercisesDetails } from 'styles';
import { RouteProp } from '@react-navigation/native';
import ExerciseDetailsSection from 'components/exercises/ExerciseDetailsSection';
import ExerciseVideo from 'components/exercises/ExerciseVideo';
import { ExercisesStackParamList } from 'types';

type ExerciseDetailsProps = {
  route: RouteProp<ExercisesStackParamList, 'ExerciseDetails'>;
};

const ExerciseDetailsScreen = ({ route }: ExerciseDetailsProps) => {
  const { item } = route.params;
  const { name, description, instructions, advices } = item;
  const { t } = useTranslation();

  return (
    <ScrollView style={exercisesDetails.container}>
      <ExerciseVideo />
      <Text style={exercisesDetails.name}>{t(name)}</Text>
      <Text>{t(description)}</Text>
      <ExerciseDetailsSection title="instructions" data={instructions} />
      <ExerciseDetailsSection title="advices" data={advices} />
    </ScrollView>
  );
};

export default ExerciseDetailsScreen;
