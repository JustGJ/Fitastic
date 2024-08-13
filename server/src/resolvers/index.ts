import userResolvers from './user.resolver';
import exerciseResolvers from './exercise.resolver';
import { mergeResolvers } from '@graphql-tools/merge';

export default mergeResolvers([userResolvers, exerciseResolvers]);
