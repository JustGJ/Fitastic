import React, { useState, useCallback, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Exercise, NavigationProps } from 'types';
import { chevronRight, exerciseListItem } from 'styles';
import CheckBox from '@react-native-community/checkbox';
import Feather from 'react-native-vector-icons/Feather';
import { Colors } from 'styles/variables';

interface IExerciseListItemProps extends NavigationProps {
  item: Exercise;
  origin: 'createSession' | 'exercises';
  exercisesSelected?: string[];
  setExercisesSelected?: React.Dispatch<React.SetStateAction<string[]>>;
}

const ExerciseListItem: React.FC<IExerciseListItemProps> = ({
  item,
  origin,
  navigation,
  exercisesSelected,
  setExercisesSelected,
}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const isEmptyExercisesSelected = exercisesSelected?.length === 0;
    if (isEmptyExercisesSelected) {
      setToggleCheckBox(false);
    }
  }, [exercisesSelected]);

  const handlePress = useCallback(() => {
    if (origin === 'exercises') {
      navigation.navigate('ExerciseDetails', { item });
    } else {
      const newValue = !toggleCheckBox;
      setToggleCheckBox(newValue);
      handleValueChange(newValue);
    }
  }, [toggleCheckBox, origin, navigation, item]);

  const handleValueChange = useCallback(
    (newValue: boolean) => {
      if (setExercisesSelected) {
        setExercisesSelected(prevExercises =>
          newValue
            ? [...prevExercises, item.name]
            : prevExercises.filter(exercise => exercise !== item.name),
        );
      }
    },
    [item.name],
  );

  const renderCheckBoxOrChevron = () => {
    if (origin === 'createSession') {
      return (
        <CheckBox
          style={exerciseListItem.checkBox}
          lineWidth={1}
          animationDuration={0.2}
          onAnimationType="stroke"
          boxType="square"
          disabled={true}
          value={toggleCheckBox}
        />
      );
    }
    return (
      <Feather style={chevronRight.icon} name="chevron-right" size={20} color={Colors.blueAzur} />
    );
  };

  return (
    <TouchableOpacity style={exerciseListItem.container} onPress={handlePress}>
      <View style={exerciseListItem.imageContainer}>
        <Image
          source={require('assets/images/epaule-target.png')}
          resizeMode="cover"
          style={exerciseListItem.image}
        />
      </View>
      <Text style={exerciseListItem.title}>{t(item.name)}</Text>
      {renderCheckBoxOrChevron()}
    </TouchableOpacity>
  );
};

export default ExerciseListItem;
