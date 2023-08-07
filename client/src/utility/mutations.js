import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      id
      username
      email
    }
  }
`;

export const CREATE_LESSON = gql`
  mutation CreateLesson($title: String!, $description: String!, $content: String!) {
    createLesson(title: $title, description: $description, content: $content) {
      id
      title
      description
      content
    }
  }
`;

export const CREATE_QUIZ = gql`
  mutation CreateQuiz($title: String!, $questions: [QuestionInput!]) {
    createQuiz(title: $title, questions: $questions) {
      id
      title
      questions {
        question
        options
        answer
      }
    }
  }
`;
