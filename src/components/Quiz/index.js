// Quiz.js
import React, { useState, useEffect } from "react";
import { useMutation, useReactiveVar } from "@apollo/client";

import QuizSynopsis from "./QuizSynopsis";
import QuizQuestion from "./QuizQuestion";
import QuizSummary from "./QuizSummary";
import { COURSES_SECTIONS_SOLVE_TEST } from "../../graphql/mutations/courses";

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

const Quiz = ({ testData, sectionId, courseId }) => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [calculatedAnswer, setCalculatedAnswer] = useState({
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const [solvetestFn, solveTest] = useMutation(COURSES_SECTIONS_SOLVE_TEST, {
    onCompleted: (data) => {
      cartItemsVar(data?.courses_addToCart.data);
      toast.success(`success`, {
        autoClose: 3000,
        hideProgressBar: false,
      });
      console.log({ courses: data });
    },
    onError: (error) => {
      toast.error(`error:${error}`, {
        autoClose: 3000,
        hideProgressBar: false,
      });
      console.log({ error });
    },
  });

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleResetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestionIndex(0);
    setQuizAnswers({});
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

    testData.forEach((question, index) => {
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
    console.log({ selectedOptions });
    const updatedAnswers = { ...quizAnswers };
    const questionId = testData[currentQuestionIndex]._id;

    // solvetestFn({variables:{ courseId, sectionId, questionId, answers: selectedOptions }})
    console.log({ courseId, sectionId, questionId, answers: selectedOptions });
    updatedAnswers[questionId] = selectedOptions ? [...selectedOptions] : [];

    // Move to the next question or display the summary
    if (currentQuestionIndex < testData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(-1); // Quiz is complete, show the result summary
    }

    setQuizAnswers(updatedAnswers);
  };

  const { correctAnswers, wrongAnswers } =
    calculateTotalCorrectAndWrongAnswers();

  useEffect(() => {
    // Reset quiz-related states when testData changes
    handleResetQuiz();
  }, [testData]);

  return (
    <div>
      {quizStarted === false ? (
        <QuizSynopsis
          totalQuestions={testData.length}
          passScore={Math.ceil(testData.length * 0.7)} // Example pass score (70%)
          onStartQuiz={handleStartQuiz}
        />
      ) : currentQuestionIndex === -1 &&
        quizAnswers &&
        Object.keys(quizAnswers).length > 0 ? (
        <div>
          <QuizSummary
            quizData={testData}
            quizAnswers={quizAnswers}
            correctAnswers={correctAnswers}
            wrongAnswers={wrongAnswers}
            handleResetQuiz={handleResetQuiz}
          />
        </div>
      ) : (
        <QuizQuestion
          totalQuestions={testData.length}
          questionData={testData[currentQuestionIndex]}
          onAnswerSubmit={handleAnswerSubmit}
          currentQuestionIndex={currentQuestionIndex}
          onPreviousQuestion={handlePreviousQuestion}
        />
      )}
    </div>
  );
};

export default Quiz;
