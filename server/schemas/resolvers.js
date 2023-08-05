const User = require('../models/User');
const Lesson = require('../models/Lesson');
const Quiz = require('../models/Quiz');

const resolvers = {
  Query: {
    getUser: (_, { id }) => User.findById(id),
    getLessons: () => Lesson.find({}),
    getLesson: (_, { id }) => Lesson.findById(id), // Get a specific lesson by ID
    getQuiz: (_, { id }) => Quiz.findById(id),
  },
  Mutation: {
    createUser: (_, args) => new User(args).save(),
    createLesson: (_, args) => new Lesson(args).save(),
    createQuiz: (_, args) => new Quiz(args).save(),
  },
};

module.exports = resolvers;
