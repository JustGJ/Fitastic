import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import resolvers from './resolvers/exercise.resolver';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs as scalarsTypedefs, resolvers as scalarsResolvers } from 'graphql-scalars';
import types from './schemas';

const schema = makeExecutableSchema({
  typeDefs: [types, ... scalarsTypedefs],
  resolvers: { ...resolvers, ...scalarsResolvers },
});

const server = new ApolloServer({
  schema,
  csrfPrevention: true,
  cache: 'bounded',
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);