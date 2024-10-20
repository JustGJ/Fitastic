import React from 'react';
import { SafeAreaView } from 'react-native';
import { exercises } from 'styles';
import ExercisesList from 'components/exercises/exercisesList';
import { NavigationProps } from 'types';

const ExercisesScreen = ({ navigation }: NavigationProps) => (
  <SafeAreaView style={exercises.container}>
    <ExercisesList navigation={navigation} origin="exercises" />
  </SafeAreaView>
);

export default ExercisesScreen;
