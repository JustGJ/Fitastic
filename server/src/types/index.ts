import { PrismaClient, User } from '@prisma/client';

export type GqlContext = {
  currentUser: User | null;
  prisma: PrismaClient;
};
