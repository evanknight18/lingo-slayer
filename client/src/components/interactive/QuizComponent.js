import React, { useState } from 'react';
import PropTypes from 'prop-types';

const QuizComponent = ({ question, onAnswerSelected }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
    onAnswerSelected(index);
  };

  return (
    <div className="quiz-component">
      <p>{question.prompt}</p>
      <div className="answers">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            className={index === selectedAnswer ? 'selected' : ''}
            onClick={() => handleAnswerSelect(index)}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

QuizComponent.propTypes = {
  question: PropTypes.shape({
    prompt: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

export default QuizComponent;
