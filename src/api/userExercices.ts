import { Exercise } from '../types';
import axios from 'axios';

export const getUserExercices = async (): Promise<Exercise[]> => {
  const { data } = await axios.get('http://localhost:8080/api/userExercises');
  return data;
};

export const getUserExerciceDetails = async (id: string): Promise<Exercise> => {
  const { data } = await axios.get(`http://localhost:8080/api/userExercises/${id}`);
  return data;
};
