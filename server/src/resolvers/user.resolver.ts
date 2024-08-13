import { Resolvers } from '../../types';
import bcrypt from 'bcryptjs';
import Auth from '../utils/auth';
import { ErrorTypes, throwCustomError } from '../utils/errorHandler';
import { findUserByEmail } from '../utils/user';

const SALT_ROUNDS = process.env.NODE_ENV !== 'production' ? 1 : 10;

const resolvers: Resolvers = {
  Mutation: {
    signUp: async (_, { email, password, name }, { prisma }) => {
      const existingUser = await findUserByEmail(prisma, email);
      if (existingUser) return throwCustomError('User already exists', ErrorTypes.ALREADY_EXISTS);

      const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

      const user = await prisma.user.create({
        data: {
          name,
          email,
          passwordHash,
        },
      });

      const token = Auth.createAuthToken(user.id);

      return { token, user };
    },

    signIn: async (_, { email, password }, { prisma }) => {
      const user = await findUserByEmail(prisma, email);
      if (!user) return throwCustomError('Email or password incorrect', ErrorTypes.UNAUTHENTICATED);

      const validPassword = await bcrypt.compare(password, user.passwordHash);
      if (!validPassword) return throwCustomError('Email or password incorrect', ErrorTypes.UNAUTHENTICATED);

      const token = Auth.createAuthToken(user.id);
      return { token, user };
    },
  },
};

export default resolvers;
