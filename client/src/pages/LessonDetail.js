import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const LessonDetail = () => {
  const { lessonId } = useParams();
  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    // Fetch the specific lesson based on the lessonId from the URL
    // Replace with the actual logic to fetch the lesson from your server
    fetch(`/api/lessons/${lessonId}`)
      .then((response) => response.json())
      .then((data) => setLesson(data))
      .catch((error) => console.error('Error fetching lesson:', error));
  }, [lessonId]);

  return (
    <div className="lesson-detail">
      {lesson ? (
        <>
          <h2>{lesson.title}</h2>
          <p>{lesson.description}</p>
          <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
          {/* Images, videos, exercises, or quizzes could go here */}
        </>
      ) : (
        <p>Loading lesson...</p>
      )}
    </div>
  );
};

export default LessonDetail;
