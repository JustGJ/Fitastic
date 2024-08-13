import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs as scalarsTypedefs, resolvers as scalarsResolvers } from 'graphql-scalars';
import types from './schemas';
import resolvers from './resolvers';
import { context } from './utils/context';

const schema = makeExecutableSchema({
  typeDefs: [types, ...scalarsTypedefs],
  resolvers: { ...resolvers, ...scalarsResolvers },
});

const server = new ApolloServer({
  schema,
  csrfPrevention: true,
  introspection: process.env.NODE_ENV !== 'production',
  cache: 'bounded',
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: context,
});
console.log(`🚀 Server ready at: ${url}`);
