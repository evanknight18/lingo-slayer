const mongoose = require('mongoose');
const Lesson = require('../models/Lesson');

mongoose.connect('mongodb://127.0.0.1:27017/music-theory-lessons', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    return Lesson.insertMany([
      {
      }
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
