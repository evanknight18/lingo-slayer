import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_QUIZ } from '../utils/queries';

const QuizPage = ({ quizId }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const { loading, error, data } = useQuery(GET_QUIZ, {
    variables: { id: quizId }
  });

  if (loading) return <p>Loading quiz...</p>;
  if (error) return <p>Error loading quiz: {error.message}</p>;

  const quiz = data.getQuiz || [];

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quiz.questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  if (currentQuestionIndex >= quiz.questions.length) {
    return (
      <div className="quiz-results">
        <h2>Your Score: {score} / {quiz.questions.length}</h2>
      </div>
    );
  }

  const question = quiz.questions[currentQuestionIndex];

  return (
    <div className="quiz-page">
      <h2>{quiz.title}</h2>
      <p>{question.question}</p>
      <div className="answers">
        {question.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswerSelect(option)}>
            {option}
          </button>
        ))}
      </div>
      <button disabled={selectedAnswer === null} onClick={handleNextQuestion}>
        Next
      </button>
    </div>
  );
};

export default QuizPage;
