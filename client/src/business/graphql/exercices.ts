import { gql } from '@apollo/client';

export const GET_EXERCICES = gql`
  query getExercices {
    exercises {
      id
      name
      target
      instructions
      imageUrl
    }
  }
`;
