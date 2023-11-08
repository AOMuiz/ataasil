// Quiz.js
import React, { useState } from "react";
import QuizSynopsis from "./QuizSynopsis";
import QuizQuestion from "./QuizQuestion";
import QuizSummary from "./QuizSummary";

const quizData = [
  {
    question: "ما المصدر الذي يقدم آيات التوحيد؟",
    options: ["مجموعات الحديث", "آيات التوحيد", "سيرة النبي", "الفقه الإسلامي"],
    answer: ["آيات التوحيد"],
    multiple: false,
  },
  {
    question: "ما هو تركيز هذا الفصل؟",
    options: [
      "تاريخ التوحيد",
      "شرح المعتقدات الإسلامية",
      "فهم الشرك",
      "تأكيد التوحيد في القرآن",
    ],
    answer: ["تأكيد التوحيد في القرآن"],
    multiple: false,
  },
];

const Quiz = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateTotalCorrectAndWrongAnswers = () => {
    let correctAnswers = 0;
    let wrongAnswers = 0;

    quizData.forEach((question, index) => {
      const selectedOptions = quizAnswers[index];
      const correctOptions = question.answer;

      if (
        selectedOptions?.length === correctOptions?.length &&
        selectedOptions.every((option) => correctOptions.includes(option))
      ) {
        correctAnswers++;
      } else {
        wrongAnswers++;
      }
    });

    return { correctAnswers, wrongAnswers };
  };

  const { correctAnswers, wrongAnswers } =
    calculateTotalCorrectAndWrongAnswers();

  const handleAnswerSubmit = (selectedOptions) => {
    const updatedAnswers = [...quizAnswers];
    updatedAnswers[currentQuestionIndex] = selectedOptions;
    setQuizAnswers(updatedAnswers);

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz is complete, show the result summary
      setCurrentQuestionIndex(-1); // Reset currentQuestionIndex
    }
  };

  return (
    <div className="">
      {!quizStarted ? (
        <QuizSynopsis
          totalQuestions={quizData.length}
          passScore={Math.ceil(quizData.length * 0.7)} // Example pass score (70%)
          onStartQuiz={handleStartQuiz}
        />
      ) : currentQuestionIndex === -1 ? (
        <div>
          <QuizSummary
            quizData={quizData}
            quizAnswers={quizAnswers}
            correctAnswers={correctAnswers}
            wrongAnswers={wrongAnswers}
          />
        </div>
      ) : (
        <QuizQuestion
          questionData={quizData[currentQuestionIndex]}
          onAnswerSubmit={handleAnswerSubmit}
          currentQuestionIndex={currentQuestionIndex}
          onPreviousQuestion={handlePreviousQuestion}
        />
      )}
    </div>
  );
};

export default Quiz;
