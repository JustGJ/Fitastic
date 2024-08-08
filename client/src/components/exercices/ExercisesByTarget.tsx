import React from 'react';
import { Text, View, Image } from 'react-native';

interface IExercisesByTargetProps {
  target: string;
  exercises: Exercice[];
}

// Définissez une interface pour l'exercice
interface Exercice {
  id: string;
  name: string;
  target: string;
  gifUrl: string;
  [key: string]: any; // Optionnel: si vous avez d'autres propriétés non spécifiées
}

const ExercisesByTarget = ({ target, exercises }: IExercisesByTargetProps) => (
  <View>
    <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10 }}>
      {target}
    </Text>
    {exercises.map((exercice: Exercice) => (
      <View
        key={exercice.id}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <Image
          source={{ uri: exercice.gifUrl }}
          style={{ width: 30, height: 30 }}
        />
        <Text style={{ marginLeft: 10 }}>{exercice.name}</Text>
      </View>
    ))}
  </View>
);

export default ExercisesByTarget;
