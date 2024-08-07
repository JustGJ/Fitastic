import client from 'business/graphql/client';
import { GET_EXERCICES } from 'business/graphql/exercices';
import { useQuery } from 'react-query';

export const useExercices = () =>
  useQuery('exercices', async () => {
    const { data } = await client.query({ query: GET_EXERCICES });
    return data.exercises;
  });
