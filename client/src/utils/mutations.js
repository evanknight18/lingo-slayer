import { gql } from '@apollo/client';

// Create User
export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username      
      }
    }
  }
`;

// Login User
export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// Create Lesson
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

// Create Quiz
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

// Update Lesson
export const UPDATE_LESSON = gql`
  mutation UpdateLesson($id: ID!, $title: String, $description: String, $content: String) {
    updateLesson(id: $id, title: $title, description: $description, content: $content) {
      id
      title
      description
      content
    }
  }
`;

// Delete Lesson
export const DELETE_LESSON = gql`
  mutation DeleteLesson($id: ID!) {
    deleteLesson(id: $id) {
      id
    }
  }
`;

// Update Quiz
export const UPDATE_QUIZ = gql`
  mutation UpdateQuiz($id: ID!, $title: String, $questions: [QuestionInput!]) {
    updateQuiz(id: $id, title: $title, questions: $questions) {
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

// Delete Quiz
export const DELETE_QUIZ = gql`
  mutation DeleteQuiz($id: ID!) {
    deleteQuiz(id: $id) {
      id
    }
  }
`;
