import jwt from 'jsonwebtoken';
import prisma from './prismaClient';
import { secretEnv } from './global';

const createAuthToken = (userId: string) => {
  if (!secretEnv) throw new Error('APP_SECRET is not set');
  const token = jwt.sign({ userId }, process.env.APP_SECRET as string);
  return token;
};

const verifyAuthToken = (token: string) => {
  if (!process.env.APP_SECRET) throw new Error('APP_SECRET is not set');
  const { userId } = jwt.verify(token, process.env.APP_SECRET as string) as {
    userId: string;
  };
  return prisma.user.findUniqueOrThrow({
    where: {
      id: userId,
    },
  });
};

const Auth = { createAuthToken, verifyAuthToken };

export default Auth;
