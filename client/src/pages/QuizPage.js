import React, { useState, useEffect } from 'react';

const QuizPage = () => {
  // This might represent quiz data fetched from the API
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Fetch quiz from the API
    // Replace with actual logic to fetch quiz from your server
    fetch('/api/quiz')
      .then((response) => response.json())
      .then((data) => setQuiz(data))
      .catch((error) => console.error('Error fetching quiz:', error));
  }, []);

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quiz.questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  if (!quiz) return <p>Loading quiz...</p>;

  if (currentQuestionIndex >= quiz.questions.length) {
    return (
      <div className="quiz-results">
        <h2>Your Score: {score} / {quiz.questions.length}</h2>
        {/* You might include further feedback, explanations, or links to related material here */}
      </div>
    );
  }

  const question = quiz.questions[currentQuestionIndex];

  return (
    <div className="quiz-page">
      <h2>{quiz.title}</h2>
      <p>{question.prompt}</p>
      <div className="answers">
        {question.answers.map((answer, index) => (
          <button key={index} onClick={() => handleAnswerSelect(index)}>
            {answer}
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
