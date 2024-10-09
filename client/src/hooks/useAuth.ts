import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation } from '@tanstack/react-query';
import { login } from 'api/auth';

const saveToken = async (token: string) => {
  try {
    await AsyncStorage.setItem('accessToken', token);
  } catch (error) {
    console.error('Failed to save token:', error);
  }
};

export const useAuth = () => {
  const { mutate: loginUser } = useMutation(login, {
    onSuccess: data => {
      saveToken(data.data.accessToken);
    },
    onError: err => {
      console.log(err);
    },
  });

  return { loginUser };
};
