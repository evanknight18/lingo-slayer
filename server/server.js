const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const cors = require('cors');
const { authMiddleware } = require('./auth.js'); // Update the path to auth.js
const schema = require('./schemas/index.js');

mongoose.connect('mongodb://localhost/musictheorylessons', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error(err);
});

const app = express();
app.use(cors());

// Use the authMiddleware for JWT authentication
app.use(authMiddleware);

const server = new ApolloServer({
  schema,
  context: ({ req }) => ({ user: req.user }), // Pass user information to resolvers
});

server.applyMiddleware({ app });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
});
