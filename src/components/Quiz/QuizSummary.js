// QuizSummary.js
import React from "react";

const QuizSummary = ({
  quizData,
  quizAnswers,
  correctAnswers,
  wrongAnswers,
}) => {
  return (
    <div className="px-10 py-5">
      <h2 className="text-3xl font-bold">ملخص الاختبار</h2>
      <div className="mb-5 mt-10 flex gap-8">
        <p className="font-bold">
          تم النجاح:
          <span className="font-normal text-[#32A071]">{correctAnswers}</span>
        </p>
        <p className="font-bold text-gray-G30">
          فشل: <span className="font-normal text-red-400">{wrongAnswers}</span>
        </p>
        <p className="font-bold text-gray-G30">
          النسبة المئوية:{" "}
          <span className="font-normal text-[#32A071]">{correctAnswers}%</span>
        </p>
        {/* <p>تم النجاح: {quizData.length} </p>  */}
      </div>
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

export default QuizSummary;
