import { useQuery } from '@tanstack/react-query';
import { getUserExercices } from 'api/userExercices';
import { Exercise } from 'types';

const QUERY_KEY = ['UserExercises'];

export const useUserExercises = () =>
  useQuery<Exercise[], Error>(QUERY_KEY, getUserExercices, {
    onError: error => {
      console.error('Erreur lors de la récupération des exercices :', error);
    },
  });
