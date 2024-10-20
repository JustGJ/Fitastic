import { FlatList, ListRenderItem } from 'react-native';
import React, { useMemo, useState } from 'react';
import { useUserExercises } from 'hooks/useUserExercises';
import { useTranslation } from 'react-i18next';
import ExerciseListItem from './ExerciseListItem';
import { Exercise } from 'types';
import InputSearch from '../InputSearch';
import { NavigationProps } from 'types';
import { exercisesList } from 'styles';

interface IExercisesListProps extends NavigationProps {
  origin: 'createSession' | 'exercises';
  exercisesSelected?: string[];
  setExercisesSelected?: React.Dispatch<React.SetStateAction<string[]>>;
  setShowExercisesList?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExercisesList = ({
  navigation,
  exercisesSelected,
  setExercisesSelected,
  origin,
}: IExercisesListProps) => {
  const { data } = useUserExercises();
  const [searchTextInput, setSearchTextInput] = useState('');
  const { t } = useTranslation();

  const listData = useMemo(
    () =>
      data?.filter(exercise =>
        t(exercise.name.toLowerCase()).includes(searchTextInput.toLowerCase()),
      ) || [],
    [data, searchTextInput],
  );

  const renderItem: ListRenderItem<Exercise> = ({ item }) => (
    <ExerciseListItem
      exercisesSelected={exercisesSelected}
      setExercisesSelected={setExercisesSelected}
      item={item}
      origin={origin}
      navigation={navigation}
    />
  );

  return (
    <>
      <InputSearch value={searchTextInput} onChangeText={setSearchTextInput} />
      <FlatList
        data={listData}
        renderItem={renderItem}
        contentContainerStyle={exercisesList.content}
        extraData={searchTextInput}
        keyExtractor={(item: Exercise) => item.id}
      />
    </>
  );
};

export default ExercisesList;
