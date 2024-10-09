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
  userId?: string;
  name: string;
  target: string;
  image: string;
  description: string;
  instructions: string[];
  advices: string[];
  video: string;
}
