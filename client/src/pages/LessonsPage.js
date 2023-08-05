import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_LESSONS } from '../utility/queries'; // Path to your GraphQL query

const LessonsPage = () => {
  const { loading, error, data } = useQuery(GET_LESSONS);

  if (loading) return <p>Loading lessons...</p>;
  if (error) return <p>Error fetching lessons: {error.message}</p>;

  const lessons = data.getLessons;

  return (
    <div className="lessons-page">
      <h2>Explore Lessons</h2>
      <div className="lessons-list">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="lesson-item">
            <Link to={`/lessons/${lesson.id}`}>
              <h3>{lesson.title}</h3>
              <p>{lesson.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonsPage;
