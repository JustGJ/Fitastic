import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { exercisesByTarget } from 'styles';
import { Exercise } from 'types';

interface ExercisesByTargetProps {
  target: string;
  exercises: Exercise[];
}

const ExercisesByTarget = ({ target, exercises }: ExercisesByTargetProps) => (
  <View>
    <Text style={exercisesByTarget.targetTitle}>{target}</Text>
    {exercises.map((exercice: Exercise) => (
      <TouchableOpacity
        key={exercice.id}
        style={exercisesByTarget.exerciseItem}>
        <Image
          source={{ uri: exercice.gifUrl }}
          style={exercisesByTarget.exerciseImage}
        />
        <Text style={exercisesByTarget.exerciseText}>{exercice.name}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default ExercisesByTarget;
