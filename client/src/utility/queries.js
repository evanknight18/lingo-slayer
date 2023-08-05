import { gql } from '@apollo/client';

export const GET_LESSONS = gql`
  query GetLessons {
    getLessons {
      id
      title
      description
    }
  }
`;
