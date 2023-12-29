// QuizQuestion.js
import React, { useState, useEffect } from "react";
import CtaButton from "../CtaButton";

const QuizQuestion = ({
  questionData,
  onAnswerSubmit,
  onPreviousQuestion,
  currentQuestionIndex,
  totalQuestions,
  testSubmitLoading,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleSubmit = () => {
    onAnswerSubmit(selectedOptions);
  };

  useEffect(() => {
    // Reset selectedOptions when the current question changes
    setSelectedOptions([]);
  }, [currentQuestionIndex]);

  return (
    <div className="px-6 py-5">
      <div className="mb-2 border-b-2 border-gray-300 pb-3">
        <p className="mb-5 text-gray-G30">
          <span className="font-bold">الوقت:</span> 10 ساعات و 30 دقيقة
        </p>
        <p className="mb-5 text-gray-G30">
          <span className="font-bold">الأسئلة:</span> {currentQuestionIndex + 1}
          من {totalQuestions}
        </p>
        <p className="mb-5 text-gray-G30">
          <span className="font-bold">مجموع النقاط السؤال:</span>{" "}
          {questionData.score}
        </p>
      </div>
      <h3 className="mb-5 mt-7 font-bold">
        {currentQuestionIndex + 1}. {questionData.question}
      </h3>
      <ul className="space-y-2">
        {questionData.options.map((option, index) => (
          <li key={index}>
            <label className="flex w-fit cursor-pointer items-center gap-5 space-x-3 text-lg">
              <input
                className="h-5 w-5"
                type={questionData.isAnswerMultiple ? "checkbox" : "radio"}
                name="quiz-option"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option)}
              />
              <span>{option}</span>
            </label>
          </li>
        ))}
      </ul>
      <div className="mb-2 mt-5 flex gap-5">
        <CtaButton
          onClick={onPreviousQuestion}
          disabled={currentQuestionIndex <= 0}
          className={
            "border-2 border-gray-G30 bg-transparent font-bold text-gray-G30"
          }
        >
          السابق
        </CtaButton>
        <CtaButton
          disabled={testSubmitLoading || selectedOptions.length === 0}
          onClick={handleSubmit}
          className={"bg-[#039BE5] font-bold"}
        >
          {testSubmitLoading ? "تقديم  ..." : "التالي"}
        </CtaButton>
      </div>
    </div>
  );
};

export default QuizQuestion;
