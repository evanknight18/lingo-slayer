import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Link to="/">Music of the Spheres</Link>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/lessons">Lessons</Link>
          </li>
          <li>
            <Link to="/circle-of-fifths">Circle of Fifths</Link>
          </li>
          <li>
            <Link to="/scales">Scales</Link>
          </li>
          <li>
            <Link to="/chords">Chords</Link>
          </li>
          <li>
            <Link to="/quiz">Quiz</Link>
          </li>
          {/* Add other links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
