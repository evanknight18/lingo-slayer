import React from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

import Dashboard from './pages/Dashboard';
import LessonsPage from './pages/LessonsPage';
import LessonDetail from './pages/LessonDetail';
import CircleOfFifthsPage from './pages/CircleOfFifthsPage';
import ScalesPage from './pages/ScalesPage';
import ChordsPage from './pages/ChordsPage';
import QuizPage from './pages/QuizPage';
import Login from './pages/LoginPage';
import Register from './pages/RegistrationPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import theme from './theme';

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

const client = new ApolloClient({
  // link: httpLink.concat(httpLink),
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <Flex as="main" padding="1.5rem">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
                <Route path="/lessons" element={<LessonsPage />} />
                <Route path="/lesson-detail/:id" element={<LessonDetail />} />
                <Route path="/circle-of-fifths" element={<CircleOfFifthsPage />} />
                <Route path="/scales" element={<ScalesPage />} />
                <Route path="/chords" element={<ChordsPage />} />
                <Route path="/quiz" element={<QuizPage />} />
            </Routes>
          </Flex>
          <Footer />
        </Router>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
