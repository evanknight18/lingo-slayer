import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Set up Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql', // Update with your GraphQL endpoint
  cache: new InMemoryCache()
});

// Render the app wrapped with ApolloProvider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
