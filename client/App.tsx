import AppNavigation from './AppNavigation';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { AppRegistry } from 'react-native';
import client from 'graphql/client';
import { AuthProvider } from 'contexts/AuthContext';

const App = () => (
  <ApolloProvider client={client}>
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  </ApolloProvider>
);

export default App;

AppRegistry.registerComponent('Fitastic', () => App);
