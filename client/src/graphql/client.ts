import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from '@apollo/client';
import { removeTypenameFromVariables } from '@apollo/client/link/remove-typename';

const removeTypenameLink = removeTypenameFromVariables();

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
});

const link = ApolloLink.from([removeTypenameLink, httpLink]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({ addTypename: false }),
});

export default client;
