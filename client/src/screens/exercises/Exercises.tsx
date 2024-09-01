import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, TouchableOpacity, Image } from 'react-native';
import InputText from 'components/ui/inputs/InputText';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Colors } from 'styles/variables';
import { useQuery } from '@apollo/client';
import { GET_EXERCISES } from 'graphql/exercises';
import { Exercise, NavigationProps } from 'types';
import { useAuth } from 'contexts/AuthContext';
import { exercises } from 'styles';
import { useTranslation } from 'react-i18next';
import { styles } from './ExercisesByTargetScreen';
import Feather from 'react-native-vector-icons/Feather';

interface ExercisesByTargetProps {
  [key: string]: Exercise[];
}

const Exercises = ({ navigation }: NavigationProps) => {
  const { token } = useAuth();
  const [searchTextInput, setSearchTextInput] = useState('');
  const [filteredExercises, setFilteredExercises] = useState<Exercise[]>([]);
  const { t } = useTranslation();
  const { data, loading, error } = useQuery(GET_EXERCISES, {
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
        rightIcon={
          searchTextInput.length > 0 ? (
            <EvilIcons
              name="close"
              size={20}
              color={Colors.black}
              onPress={() => setSearchTextInput('')}
            />
          ) : null
        }
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
          <TouchableOpacity
            style={exercises.targetContainer}
            onPress={() =>
              navigation.navigate('ExercisesByTargetScreen', {
                target,
                exercisesByTarget,
              })
            }>
            <View style={exercises.imageContainer}>
              <Image
                source={require('assets/images/epaule-target.png')}
                resizeMode="cover"
                style={exercises.targetImage}
              />
            </View>
            <Text style={exercises.title}>{t(target)}</Text>
            <Feather
              style={styles.chevron}
              name="chevron-right"
              size={20}
              color={Colors.blueAzur}
            />
          </TouchableOpacity>
        )}
        contentContainerStyle={exercises.content}
      />
    </View>
  );
};

export default Exercises;
