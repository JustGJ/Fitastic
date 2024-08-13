import { Resolvers } from '../../types';

const resolvers: Resolvers = {
  Query: {
    exercises: async (_, args, { prisma }) => {
      return await prisma.exercise.findMany();
    },
  },
};

export default resolvers;
