import React from "react";

const QuizExplanation = ({ quizData, quizAnswers }) => {
  return (
    <div className="px-10 py-3">
      {quizData.map((question, index) => (
        <div key={index}>
          <p>{question.question}</p>
          <p>Your Answer(s): {quizAnswers[index].join(", ")}</p>
          <p>Correct Answer(s): {question.answer.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default QuizExplanation;
