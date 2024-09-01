import { gql } from '@apollo/client';

export const GET_EXERCISES = gql`
  query getExercises {
    exercises {
      id
      name
      target
      description
      instructions
      advices
      imageUrl
    }
  }
`;
