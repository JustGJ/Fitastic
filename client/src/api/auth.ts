import axios from 'axios';

interface RegisterRequest {
  firstname: string;
  lastName: string;
  userName: string;
  password: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

interface AuthResponse {
  data: {
    status: string;
    accessToken: string;
    refreshToken: string;
    message: string;
  };
}

export const register = async (registration: RegisterRequest): Promise<AuthResponse> => {
  const { data } = await axios.post('http://localhost:8080/register', registration);
  return data;
};

export const login = async (loginRequest: LoginRequest): Promise<AuthResponse> => {
  const { data } = await axios.post('http://localhost:8080/login', loginRequest);
  return data;
};
