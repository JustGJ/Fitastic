import { FlatList, ListRenderItem } from 'react-native';
import React, { useMemo, useState } from 'react';
import { useUserExercises } from 'hooks/useUserExercises';
import { useTranslation } from 'react-i18next';
import ExerciseListItem from './ExerciseListItem';
import { Exercise } from 'types';
import InputSearch from './InputSearch';
import { exercises } from 'styles';
import { NavigationProps } from 'types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ExercisesList = ({ navigation }: NavigationProps) => {
  const [searchTextInput, setSearchTextInput] = useState('');

  <InputSearch value={searchTextInput} onChangeText={setSearchTextInput} />;

  const { data } = useUserExercises();
  const { t } = useTranslation();

  const listData = useMemo(
    () =>
      data?.filter(exercise =>
        t(exercise.name.toLowerCase()).includes(searchTextInput.toLowerCase()),
      ) || [],
    [data, searchTextInput],
  );

  const renderItem: ListRenderItem<Exercise> = ({ item }) => (
    <ExerciseListItem item={item} onPress={() => console.log('press')} />

    // <ListItem item={item} onPress={() => handlePress(item)} />
  );

  return (
    <>
      <InputSearch value={searchTextInput} onChangeText={setSearchTextInput} />
      <FlatList
        data={listData}
        renderItem={renderItem}
        contentContainerStyle={exercises.content}
        extraData={searchTextInput}
        keyExtractor={(item: Exercise) => item.id}
      />
    </>
  );
};

export default ExercisesList;
