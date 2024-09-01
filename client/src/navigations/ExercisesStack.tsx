import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Exercises from 'screens/exercises/Exercises';
import ExerciseDetails from 'screens/exercises/ExerciseDetails';
import ExercisesByTargetScreen from 'screens/exercises/ExercisesByTargetScreen';

const Stack = createNativeStackNavigator();

const ExercisesStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Exercices"
      component={Exercises}
      options={{ headerTitle: 'Mes exercices' }}
    />
    <Stack.Screen
      name="ExercisesByTargetScreen"
      component={ExercisesByTargetScreen}
      options={{ headerTitle: 'Exercices par cible' }}
    />
    <Stack.Screen
      name="ExerciseDetail"
      component={ExerciseDetails}
      options={{ headerTitle: "Détail de l'exercice" }}
    />
  </Stack.Navigator>
);

export default ExercisesStack;
