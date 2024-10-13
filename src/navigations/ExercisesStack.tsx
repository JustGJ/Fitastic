import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExercisesScreen from 'screens/exercises/ExercisesScreen';
import ExerciseDetailsScreen from 'screens/exercises/ExerciseDetailsScreen';
import { ExercisesStackParamList } from 'types/routes';

const Stack = createNativeStackNavigator<ExercisesStackParamList>();

const ExercisesStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Exercices"
      component={ExercisesScreen}
      options={{ headerTitle: 'Mes exercices' }}
    />
    {/* <Stack.Screen
      name="ExercisesByTarget"
      component={ExercisesByTargetScreen}
      options={{ headerTitle: 'Exercices par cible' }}
    /> */}
    <Stack.Screen
      name="ExerciseDetails"
      component={ExerciseDetailsScreen}
      options={{ headerTitle: "Détail de l'exercice" }}
    />
  </Stack.Navigator>
);

export default ExercisesStack;
