// Quiz.js
import React, { useState, useEffect } from "react";
import QuizSynopsis from "./QuizSynopsis";
import QuizQuestion from "./QuizQuestion";
import QuizSummary from "./QuizSummary";

const quizData = [
  {
    _id: "64c4c56d65f2333a8cfa7818",
    question: "ما المصدر الذي يقدم آيات التوحيد؟",
    options: ["مجموعات الحديث", "آيات التوحيد", "سيرة النبي", "الفقه الإسلامي"],
    answers: ["آيات التوحيد"],
    isAnswerMultiple: true,
    score: 5,
  },
  {
    _id: "64c4c56d65f2333a8cfa7819",
    question: "ما هو تركيز هذا الفصل؟",
    options: [
      "تاريخ التوحيد",
      "شرح المعتقدات الإسلامية",
      "فهم الشرك",
      "تأكيد التوحيد في القرآن",
    ],
    answers: ["تأكيد التوحيد في القرآن"],
    isAnswerMultiple: false,
    score: 5,
  },
];

const Quiz = ({ quizData: initialQuizData }) => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [calculatedAnswer, setCalculatedAnswer] = useState({
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [quizData, setQuizData] = useState(initialQuizData);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleResetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestionIndex(0);
    setQuizAnswers([]);
    setCalculatedAnswer({ correctAnswers: 0, wrongAnswers: 0 });
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
      const selectedOptions = quizAnswers[question._id];
      const correctOptions = question.answers;

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

  const handleAnswerSubmit = (selectedOptions) => {
    const updatedAnswers = { ...quizAnswers };
    const questionId = quizData[currentQuestionIndex]._id;

    updatedAnswers[questionId] = selectedOptions ? [...selectedOptions] : [];

    // Move to the next question or display the summary
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(-1); // Quiz is complete, show the result summary
    }
    console.log({ updatedAnswers, calculatedAnswer });

    setQuizAnswers(updatedAnswers);
  };

  const { correctAnswers, wrongAnswers } =
    calculateTotalCorrectAndWrongAnswers();

  useEffect(() => {
    // Reset quiz-related states when quizData changes
    handleResetQuiz();
  }, [initialQuizData]);

  return (
    <div>
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
            handleResetQuiz={handleResetQuiz}
          />
        </div>
      ) : (
        <QuizQuestion
          totalQuestions={quizData.length}
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
