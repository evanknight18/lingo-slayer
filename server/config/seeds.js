const mongoose = require('mongoose');
const Lesson = require('./models/Lesson'); // Adjust the path to your Lesson model

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    return Lesson.insertMany([
      { title: 'Lesson 1', description: 'Introduction to Music Theory' },
   
    ]);
  })
  .then(() => {
    console.log('Lessons inserted successfully');
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error('An error occurred:', err);
    mongoose.disconnect();
  });
