import { NavigationProp, ParamListBase } from '@react-navigation/native';

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthData {
  token: string | null;
  user: User | null;
}

export interface NavigationProps {
  navigation: NavigationProp<ParamListBase>;
}

export interface Exercise {
  imageUrl: string | undefined;
  id: string;
  name: string;
  target: string;
  gifUrl: string;
}
