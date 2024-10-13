import AppNavigation from './AppNavigation';
import React from 'react';
import { AppRegistry } from 'react-native';
import { AuthProvider } from 'contexts/AuthContext';
import './src/localization/i18n';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from 'api/client';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  </QueryClientProvider>
);

export default App;

AppRegistry.registerComponent('Fitastic', () => App);
