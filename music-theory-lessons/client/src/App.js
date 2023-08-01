import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './components/Auth';
import Community from './components/Community';
import Dashboard from './components/Dashboard';
import Lessons from './components/Lessons';
import Quizzes from './components/Quizzes';
import TravelHistory from './components/TravelHistory';
import Vocabulary from './components/Vocabulary';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/community" component={Community} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/lessons" component={Lessons} />
          <Route path="/quizzes" component={Quizzes} />
          <Route path="/travel-history" component={TravelHistory} />
          <Route path="/vocabulary" component={Vocabulary} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
