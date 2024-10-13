import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { chevronRight, exerciseListItem } from 'styles';
import { Colors } from 'styles/variables';
import Feather from 'react-native-vector-icons/Feather';
import { Exercise } from 'types';

interface IExerciseListItemProps {
  item: Exercise;
  onPress: () => void;
}

const ExerciseListItem = ({ item, onPress }: IExerciseListItemProps) => {
  const { t } = useTranslation();

  return (
    <TouchableOpacity style={exerciseListItem.container} onPress={onPress}>
      <View style={exerciseListItem.imageContainer}>
        <Image
          source={require('assets/images/epaule-target.png')}
          resizeMode="cover"
          style={exerciseListItem.image}
        />
      </View>
      <Text style={exerciseListItem.title}>{t(item.name)}</Text>
      <Feather style={chevronRight.icon} name="chevron-right" size={20} color={Colors.blueAzur} />
    </TouchableOpacity>
  );
};

export default ExerciseListItem;
