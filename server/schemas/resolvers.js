const User = require('../models/User');
const Lesson = require('../models/Lesson');
const Quiz = require('../models/Quiz');

const resolvers = {
  Query: {
    getUser: (_, { id }) => User.findById(id),
    getLessons: () => Lesson.find({}),
    getLesson: (_, { id }) => Lesson.findById(id),
    getQuiz: (_, { id }) => Quiz.findById(id),
  },
  Mutation: {
    // Create operations
    createUser: (_, args) => new User(args).save(),
    createLesson: (_, args) => new Lesson(args).save(),
    createQuiz: (_, { title, questions }) => {
      const quiz = new Quiz({
        title,
        questions: questions.map(q => ({
          question: q.question,
          options: q.options,
          answer: q.answer
        }))
      });
      return quiz.save();
    },

    // Update operations
    updateUser: (_, { id, args }) => User.findByIdAndUpdate(id, args, { new: true }),
    updateLesson: (_, { id, args }) => Lesson.findByIdAndUpdate(id, args, { new: true }),
    updateQuiz: (_, { id, title, questions }) => Quiz.findByIdAndUpdate(id, { title, questions }, { new: true }),

    // Delete operations
    deleteUser: (_, { id }) => User.findByIdAndDelete(id),
    deleteLesson: (_, { id }) => Lesson.findByIdAndDelete(id),
    deleteQuiz: (_, { id }) => Quiz.findByIdAndDelete(id),
  },
};

module.exports = resolvers;

