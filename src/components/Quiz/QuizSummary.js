// QuizSummary.js
import React, { useState, useEffect } from "react";
import QuizExplanation from "./QuizExplanation";
import CtaButton from "../CtaButton";

const QuizSummary = ({
  quizData,
  quizAnswers,
  correctAnswers,
  wrongAnswers,
  handleResetQuiz,
}) => {
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    setShowExplanation(false);
  }, [quizData, quizAnswers]);

  return (
    <>
      {showExplanation && quizAnswers && Object.keys(quizAnswers).length > 0 ? (
        <QuizExplanation quizData={quizData} quizAnswers={quizAnswers} />
      ) : (
        <div className="px-10 py-5">
          <div className="space-y-2 border-b-2 border-gray-300 pb-3">
            <h4 className="mb-3 font-bold">أرسل مهمتك</h4>
            <p className="text-gray-G30">
              <span className="font-bold">الوقت:</span> 10 ساعات و 30 دقيقة
            </p>
            <p className="text-gray-G30">
              {/* <span className="font-bold">عدد الأسئلة:</span> {totalQuestions} */}
            </p>
          </div>
          <div className="my-10 space-y-10">
            <h2 className="text-3xl font-bold">ملخص الاختبار</h2>
            <div className="mb-5 mt-10 flex gap-8 text-lg">
              <p className="font-bold">
                تم النجاح:
                <span className="font-normal text-[#32A071]">
                  {" "}
                  {correctAnswers}
                </span>
              </p>
              <p className="font-bold text-gray-G30">
                فشل:{" "}
                <span className="font-normal text-red-400">
                  {" "}
                  {wrongAnswers}
                </span>
              </p>
              <p className="font-bold text-gray-G30">
                النسبة المئوية:{" "}
                <span className="font-normal text-[#32A071]">
                  {correctAnswers}%
                </span>
              </p>
            </div>
            <div className="flex items-center gap-8">
              <CtaButton
                className={"font-bold"}
                onClick={() => setShowExplanation(true)}
              >
                عرض التعليقات
              </CtaButton>
              <button
                onClick={handleResetQuiz}
                className="cursor-pointer border-b-2 font-bold text-gray-G30"
              >
                حاول ثانية
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuizSummary;
