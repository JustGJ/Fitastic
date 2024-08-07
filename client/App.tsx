import { QueryClient, QueryClientProvider } from 'react-query';
import AppNavigation from './AppNavigation';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { AppRegistry } from 'react-native';
import client from 'business/graphql/client';

const queryClient = new QueryClient();

const App = () => (
  <ApolloProvider client={client}>
    <QueryClientProvider client={queryClient}>
      <AppNavigation />
    </QueryClientProvider>
  </ApolloProvider>
);

export default App;

AppRegistry.registerComponent('MyApplication', () => App);
