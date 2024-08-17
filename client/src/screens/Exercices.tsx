import React, { useState, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import InputText from 'components/ui/inputs/InputText';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Colors } from 'styles/variables';
import ExercisesByTarget from 'components/exercices/ExercisesByTarget';
import { useQuery } from '@apollo/client';
import { GET_EXERCICES } from 'graphql/exercices';
import { Exercise } from 'types';
import { useAuth } from 'contexts/AuthContext';
import { exercises } from 'styles';

interface ExercisesByTargetProps {
  [key: string]: Exercise[];
}

const Exercices = () => {
  const { token } = useAuth();
  const [searchTextInput, setSearchTextInput] = useState('');
  const [filteredExercises, setFilteredExercises] = useState<Exercise[]>([]);
  const { data, loading, error } = useQuery(GET_EXERCICES, {
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  useEffect(() => {
    if (data && data.exercises) {
      setFilteredExercises(data.exercises);
    }
  }, [data]);

  useEffect(() => {
    if (data && data.exercises) {
      const filtered = data.exercises.filter((exercise: Exercise) =>
        exercise.name.toLowerCase().includes(searchTextInput.toLowerCase()),
      );
      setFilteredExercises(filtered);
    }
  }, [searchTextInput, data]);

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error</Text>;
  }

  const exercisesByTarget: ExercisesByTargetProps = filteredExercises.reduce(
    (acc: ExercisesByTargetProps, exercise: Exercise) => {
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
    <View style={exercises.container}>
      <InputText
        leftIcon={<EvilIcons name="search" size={20} color={Colors.black} />}
        rightIcon={<EvilIcons name="close" size={20} color={Colors.black} />}
        textColor={Colors.black}
        placeholder="Rechercher un exercice"
        borderBottomColor={Colors.greyLight}
        value={searchTextInput}
        onChangeText={setSearchTextInput}
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
        contentContainerStyle={exercises.content}
      />
    </View>
  );
};

export default Exercices;
