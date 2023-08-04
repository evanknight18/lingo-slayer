import React from 'react';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Dashboard from './pages/Dashboard';
import LessonsPage from './pages/LessonsPage';
import LessonDetail from './pages/LessonDetail';
import CircleOfFifthsPage from './pages/CircleOfFifthsPage';
import ScalesPage from './pages/ScalesPage';
import ChordsPage from './pages/ChordsPage';
import QuizPage from './pages/QuizPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ChakraProvider>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <Flex as="main" padding="1.5rem">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/lessons" element={<LessonsPage />} />
              <Route path="/lesson-detail/:id" element={<LessonDetail />} />
              <Route path="/circle-of-fifths" element={<CircleOfFifthsPage />} />
              <Route path="/scales" element={<ScalesPage />} />
              <Route path="/chords" element={<ChordsPage />} />
              <Route path="/quiz" element={<QuizPage />} />
              {/* Add more routes here as needed */}
            </Routes>
          </Flex>
          <Footer />
        </Router>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
