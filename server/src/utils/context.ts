import jwt, { JwtPayload } from 'jsonwebtoken';
import prisma from './prismaClient';
import { ErrorTypes, throwCustomError } from './errorHandler';

// Vérification et décodage du token JWT
const getUserFromToken = (token: string): JwtPayload | null => {
  try {
    return jwt.verify(token, process.env.APP_SECRET as string) as JwtPayload;
  } catch (err) {
    console.log('🚀 ~ getUserFromToken ~ err:', err);
    return null;
  }
};

// Extraction et validation du token depuis les headers
const extractToken = (authorization: string): string | null => {
  const parts = authorization.split(' ');
  if (parts.length === 2 && parts[0] === 'Bearer') {
    return parts[1];
  }
  return null;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const context = async ({ req }: any) => {
  console.log('🚀 ~ context ~ req:', req);
  const { operationName } = req.body;

  if (operationName === 'signIn' || operationName === 'SignUp' || operationName === 'IntrospectionQuery') {
    return { prisma };
  }

  const authorization = req.headers.authorization || '';
  const token = extractToken(authorization);

  if (!token) {
    return throwCustomError('Authentication must use Bearer.', ErrorTypes.BAD_USER_INPUT);
  }

  const user = getUserFromToken(token as string);

  if (!user) {
    return throwCustomError('Invalid or expired token.', ErrorTypes.UNAUTHENTICATED);
  }

  return { currentUser: user, prisma };
};
