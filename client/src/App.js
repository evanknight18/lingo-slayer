import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Header,
  Footer,
  Dashboard,
  LessonsPage,
  LessonDetail,
  CircleOfFifthsPage,
  ScalesPage,
  ChordsPage,
  QuizPage
} from './pages';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/lessons" component={LessonsPage} />
        <Route path="/lesson-detail/:id" component={LessonDetail} />
        <Route path="/circle-of-fifths" component={CircleOfFifthsPage} />
        <Route path="/scales" component={ScalesPage} />
        <Route path="/chords" component={ChordsPage} />
        <Route path="/quiz" component={QuizPage} />
        {/* You can add more routes here as needed */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
