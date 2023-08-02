const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const schema = require('./schemas'); // Path to your combined schema

// Connect to MongoDB
mongoose.connect('mongodb://localhost/musictheorylessons', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

// Middleware for JWT authentication (optional)
app.use((req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      const user = jwt.verify(token, 'your-secret-key');
      req.user = user;
    } catch (err) {
      console.error('Invalid token');
    }
  }
  next();
});

const server = new ApolloServer({
  schema,
  context: ({ req }) => ({ user: req.user }), // Pass user information to resolvers
});

server.applyMiddleware({ app });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
});
