import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LessonComponent = ({ lesson }) => {
  return (
    <div className="lesson-component">
      <h3>{lesson.title}</h3>
      <p>{lesson.summary}</p>
      {/* You might include other lesson details, such as images, videos, or interactive examples here */}
      {lesson.contentUrl && (
        <Link to={lesson.contentUrl}>
          Read More
        </Link>
      )}
      {lesson.exerciseUrl && (
        <Link to={lesson.exerciseUrl}>
          Practice Exercise
        </Link>
      )}
    </div>
  );
};

LessonComponent.propTypes = {
  lesson: PropTypes.shape({
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    contentUrl: PropTypes.string,
    exerciseUrl: PropTypes.string,
    // Include other properties as needed, such as images or videos
  }).isRequired,
};

export default LessonComponent;
