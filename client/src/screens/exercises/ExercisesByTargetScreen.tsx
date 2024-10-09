import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Exercise, NavigationProps } from 'types';
import Feather from 'react-native-vector-icons/Feather';
import { BorderRadius, Colors, FontSizes, Margin, Padding } from 'styles/variables';
import { useTranslation } from 'react-i18next';

const ExercisesByTargetScreen = ({ navigation }: NavigationProps) => {
  const { t } = useTranslation();
  const route = useRoute();
  const { target, exercisesByTarget } = route.params as {
    target: string;
    exercisesByTarget: { [key: string]: Exercise[] };
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={exercisesByTarget[target]}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.exerciseItem}
            onPress={() => navigation.navigate('ExerciseDetails', { item })}>
            <Image source={{ uri: item.image }} style={styles.exerciseImage} />
            <Text style={styles.exerciseText}>{t(item.name)}</Text>
            <Feather
              style={styles.chevron}
              name="chevron-right"
              size={20}
              color={Colors.blueAzur}
            />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.content}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  targetTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.blueAzur,
    marginVertical: Margin.small,
  },
  exerciseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Padding.small,
  },
  exerciseImage: {
    width: 50,
    height: 50,
    borderRadius: BorderRadius.rounded,
    backgroundColor: Colors.greyLight,
  },
  exerciseText: {
    marginLeft: Margin.small,
    fontSize: FontSizes.medium,
    color: Colors.black,
  },
  chevron: {
    position: 'absolute',
    right: 0,
  },
  content: {
    padding: Padding.medium,
  },
});
export default ExercisesByTargetScreen;
