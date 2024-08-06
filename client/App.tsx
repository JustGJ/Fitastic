import { QueryClient, QueryClientProvider } from 'react-query';
import AppNavigation from './AppNavigation';
import React from 'react';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppNavigation />
  </QueryClientProvider>
);

export default App;
