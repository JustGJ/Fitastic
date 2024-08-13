import { PrismaClient } from '@prisma/client';

export const findUserByEmail = async (prisma: PrismaClient, email: string) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
};
