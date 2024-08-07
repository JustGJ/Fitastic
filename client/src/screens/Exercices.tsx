import { Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useExercices } from 'business/api/exercice';
import { useExerciceStore } from 'business/store/exerciceStore';

const Exercices = () => {
  const { exercices, setExercices } = useExerciceStore();
  const { data, isLoading, isError } = useExercices();
  console.log('🚀 ~ Exercices ~ exercices:', exercices);

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
  return (
    <View>
      {exercices.map((exercice: { id: string; name: string }) => (
        <Text key={exercice.id}>{exercice.name}</Text>
      ))}
    </View>
  );
};

export default Exercices;
