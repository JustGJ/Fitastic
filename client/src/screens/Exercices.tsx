import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useExercices } from 'business/api/exercice';
import { useExerciceStore } from 'business/store/exerciceStore';
import InputText from 'components/ui/inputs/InputText';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Colors } from 'styles/variables';
import ExercisesByTarget from 'components/exercices/ExercisesByTarget';

// Définissez une interface pour l'exercice
interface Exercice {
  id: string;
  name: string;
  target: string;
  gifUrl: string;
  [key: string]: any; // Optionnel: si vous avez d'autres propriétés non spécifiées
}

// Définissez une interface pour le stockage des exercices groupés par cible
interface ExercisesByTargetProps {
  [key: string]: Exercice[];
}

const Exercices = () => {
  const { exercices, setExercices } = useExerciceStore();
  const { data, isLoading, isError } = useExercices();

  useEffect(() => {
    if (data) {
      setExercices(data);
    }
  }, [data]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (isError) {
    return <Text>Error</Text>;
  }

  // Utilisez les types définis pour les exercices et les exercices par cible
  const exercisesByTarget: ExercisesByTargetProps = exercices.reduce(
    (acc: ExercisesByTargetProps, exercise: Exercice) => {
      const { target } = exercise;
      if (!acc[target]) {
        acc[target] = [];
      }
      acc[target].push(exercise);
      return acc;
    },
    {},
  );

  return (
    <View style={{ backgroundColor: 'white' }}>
      <InputText
        leftIcon={<EvilIcons name="search" size={20} color={Colors.black} />}
        rightIcon={<EvilIcons name="close" size={20} color={Colors.black} />}
        textColor={Colors.black}
        placeholder="Rechercher un exercice"
        borderBottomColor={Colors.greyLight}
      />
      <FlatList
        data={Object.keys(exercisesByTarget)}
        keyExtractor={item => item}
        renderItem={({ item: target }) => (
          <ExercisesByTarget
            key={target}
            target={target}
            exercises={exercisesByTarget[target]}
          />
        )}
        contentContainerStyle={{
          backgroundColor: 'white',
          paddingHorizontal: 15,
          paddingBottom: 20,
          height: '100%',
        }}
      />
    </View>
  );
};

export default Exercices;
