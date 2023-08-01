const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    lessons: [Lesson]
  }

  type Lesson {
    id: ID!
    title: String!
    description: String!
    content: String!
  }

  type Quiz {
    id: ID!
    title: String!
    questions: [Question!]
  }

  type Question {
    question: String!
    options: [String!]
    answer: String!
  }

  type Query {
    getUser(id: ID!): User
    getLessons: [Lesson]
    getQuiz(id: ID!): Quiz
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    createLesson(title: String!, description: String!, content: String!): Lesson
    createQuiz(title: String!, questions: [QuestionInput!]): Quiz
  }

  input QuestionInput {
    question: String!
    options: [String!]
    answer: String!
  }
`;

module.exports = typeDefs;
