import React, { createContext, useState, useContext } from 'react';
import { User } from 'types';

interface AuthContextType {
  token: string | null;
  currentUser: User | null;
  setAuthData: (token: string, user: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const setAuthData = (authToken: string, user: User) => {
    setToken(authToken);
    setCurrentUser(user);
  };

  return (
    <AuthContext.Provider value={{ token, currentUser, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
