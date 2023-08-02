import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LessonsPage = () => {
  // Assume you might fetch this data from your API
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    // Fetch lessons from the API
    // Replace with the actual logic to fetch lessons from your server
    fetch('/api/lessons')
      .then((response) => response.json())
      .then((data) => setLessons(data))
      .catch((error) => console.error('Error fetching lessons:', error));
  }, []);

  return (
    <div className="lessons-page">
      <h2>Explore Lessons</h2>
      <div className="lessons-list">
        {lessons.length > 0 ? (
          lessons.map((lesson) => (
            <div key={lesson.id} className="lesson-item">
              <Link to={`/lessons/${lesson.id}`}>
                <h3>{lesson.title}</h3>
                <p>{lesson.description}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>Loading lessons...</p>
        )}
      </div>
    </div>
  );
};

export default LessonsPage;
