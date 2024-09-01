import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { exercisesByTarget } from 'styles';
import { Exercise, NavigationProps } from 'types';
import Feather from 'react-native-vector-icons/Feather';
import { Colors } from 'styles/variables';

interface ExercisesByTargetProps extends NavigationProps {
  target: string;
  exercises: Exercise[];
}

const ExercisesByTarget = ({
  target,
  exercises,
  navigation,
}: ExercisesByTargetProps) => {
  const { t } = useTranslation();
  return (
    <View>
      <Text style={exercisesByTarget.targetTitle}>{target}</Text>
      {exercises.map((exercice: Exercise) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ExerciseDetail', { id: exercice.id })
          }
          key={exercice.id}
          style={exercisesByTarget.exerciseItem}>
          <Image
            source={{ uri: exercice.gifUrl }}
            style={exercisesByTarget.exerciseImage}
          />
          <Text style={exercisesByTarget.exerciseText}>{t(exercice.name)}</Text>
          <Feather
            style={exercisesByTarget.chevron}
            name="chevron-right"
            size={20}
            color={Colors.blueAzur}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ExercisesByTarget;
