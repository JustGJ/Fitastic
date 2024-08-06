import { Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { getExercises } from 'business/api/exercice';
import { useExerciceStore } from 'business/store/exerciceStore';

const Exercices = () => {
  const { exercices, setExercices } = useExerciceStore();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['exercices'],
    queryFn: getExercises,
  });

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
      <Text>Exercices</Text>
    </View>
  );
};

export default Exercices;
