import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers = {
    Query: {
      exercises: async () => {
        return await prisma.exercise.findMany();
      },
    },
  };

  export default resolvers;