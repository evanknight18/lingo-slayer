const User = require('../models/User');
const Lesson = require('../models/Lesson');
const Quiz = require('../models/Quiz');

const resolvers = {
  Query: {
    getUser:async (parent, { id }) => {return await User.findById(id)},
    getLessons:async () => {return Lesson.find()},
    getLesson:async (parent, { id }) => {return Lesson.findById(id)},
    getQuiz:async (parent, { id }) => Quiz.findById(id),
  },
  Mutation: {
    // Create operations
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({
          username,
          email,
          password,
      });
      const token = signToken(user);
      return { token, user };
  },
  login: async (parent, { email, password }) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new AuthenticationError("Incorrect credentials");
    }
    const correctPw = await user.isCorrectPassword(password);
    if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
    }
    const token = signToken(user);
    return { token, user };
},
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
    // updateUser: (_, { id, args }) => User.findByIdAndUpdate(id, args, { new: true }),
    // updateLesson: (_, { id, args }) => Lesson.findByIdAndUpdate(id, args, { new: true }),
    // updateQuiz: (_, { id, title, questions }) => Quiz.findByIdAndUpdate(id, { title, questions }, { new: true }),

    // // Delete operations
    // deleteUser: (_, { id }) => User.findByIdAndDelete(id),
    // deleteLesson: (_, { id }) => Lesson.findByIdAndDelete(id),
    // deleteQuiz: (_, { id }) => Quiz.findByIdAndDelete(id),
  },
};

module.exports = resolvers;

