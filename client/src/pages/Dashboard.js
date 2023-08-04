import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Welcome to Music of the Spheres!</h2>
      <p>Your gateway to understanding the mystical connections between music, math, and the universe.</p>
      
      <div className="quick-links">
        <h3>Quick Links:</h3>
        <Link to="/lessons">Start Learning</Link>
        <Link to="/circle-of-fifths">Explore the Circle of Fifths</Link>
        <Link to="/quiz">Take a Quiz</Link>
        {/* More links as needed */}
      </div>

      {/* include user-specific information if they're logged in */}
      <div className="user-progress">
        <h3>Your Progress:</h3>
        <p>3/5 Lessons Completed</p>
        <p>Next Lesson: <Link to="/lessons/next">Understanding Chords</Link></p>
      </div>

      {/* Featured content, announcements, or other information relevant to the dashboard can be added here */}
    </div>
  );
};

export default Dashboard;
