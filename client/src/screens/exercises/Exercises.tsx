import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Exercise, NavigationProps } from 'types';
import { exercises } from 'styles';
import { useTranslation } from 'react-i18next';
import { useUserExercises } from 'hooks/useUserExercises';
import ListItem from 'components/exercises/ListItem';
import InputSearch from 'components/exercises/InputSearch';

interface ExercisesByTargetProps {
  [key: string]: Exercise[];
}

const Exercises = ({ navigation }: NavigationProps) => {
  const [searchTextInput, setSearchTextInput] = useState('');
  const { data } = useUserExercises();
  const [filteredExercises, setFilteredExercises] = useState<Exercise[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    if (data) {
      setFilteredExercises(data);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      const filtered = data.filter((exercise: Exercise) => {
        const translatedName = t(exercise.name);
        return translatedName.toLowerCase().includes(searchTextInput.toLowerCase());
      });
      setFilteredExercises(filtered);
    }
  }, [searchTextInput, data]);

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

  const listData =
    searchTextInput.length === 0 ? Object.keys(exercisesByTarget) : filteredExercises;

  const renderItem = ({ item }: { item: any }) => {
    const isSearchInput = searchTextInput.length === 0;
    const onPress = isSearchInput
      ? () => navigation.navigate('ExercisesByTarget', { target: item, exercisesByTarget })
      : () => navigation.navigate('ExerciseDetails', { exercise: item });

    return <ListItem item={item} isTarget={isSearchInput} onPress={onPress} />;
  };

  return (
    <View style={exercises.container}>
      <InputSearch value={searchTextInput} onChangeText={setSearchTextInput} />
      <FlatList
        data={listData}
        keyExtractor={item => (typeof item === 'string' ? item : item.name)}
        renderItem={renderItem}
        contentContainerStyle={exercises.content}
      />
    </View>
  );
};

export default Exercises;
