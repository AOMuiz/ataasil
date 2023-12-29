import React, { useEffect } from "react";

const QuizExplanation = ({ quizData, quizAnswers }) => {
  return (
    <div className="px-10 py-3">
      <div className="my-5 space-y-2 border-b-2 border-gray-300 pb-3">
        <p className="text-gray-G30">
          <span className="font-bold">الوقت:</span> 0 ساعات و 0 دقيقة
        </p>

        <p className="text-gray-G30">
          <span className="font-bold">الأسئلة:</span> 20 من 20
        </p>
      </div>
      <div>
        <h4 className="mb-7 text-3xl font-bold">التقيمات</h4>
        {quizData.map((question, index) => (
          <div key={index}>
            <p className="my-4 text-lg font-bold">
              {index + 1}. {question.question}
            </p>
            <p>Your Answer(s): {quizAnswers[question._id].join(", ")}</p>
            <p>Correct Answer(s): {question.answers.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizExplanation;
