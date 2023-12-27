// Quiz.js
import React, { useState, useEffect } from "react";
import { useMutation, useLazyQuery, useReactiveVar } from "@apollo/client";
import { COURSE_SECTION } from "../../graphql/queries/courses";
import { toast } from "react-toastify";

import QuizSynopsis from "./QuizSynopsis";
import QuizQuestion from "./QuizQuestion";
import QuizSummary from "./QuizSummary";
import { COURSES_SECTIONS_SOLVE_TEST } from "../../graphql/mutations/courses";

const Quiz = ({ testData, sectionId, courseId }) => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [calculatedAnswer, setCalculatedAnswer] = useState({
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const [getSection, { data: testResult, error, loading, refetch }] =
    useLazyQuery(COURSE_SECTION, {
      onCompleted: (data) =>
        console.log({ sectionData: data.courseSection.data.quizData }),
      onError: (error) => console.log({ courseError: error }),
    });

  const [solvetestFn, solveTest] = useMutation(COURSES_SECTIONS_SOLVE_TEST, {
    onCompleted: (data) => {
      toast.success(`success`, {
        autoClose: 3000,
        hideProgressBar: false,
      });
      console.log({ testData: data });
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
      const selectedOptions = quizAnswers[question?._id];
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
    const questionId = testData[currentQuestionIndex]._id;

    solvetestFn({
      variables: { sectionId, courseId, questionId, answers: selectedOptions },
    });
    updatedAnswers[questionId] = selectedOptions ? [...selectedOptions] : [];

    // Move to the next question or display the summary
    if (
      currentQuestionIndex < testData.length - 1 &&
      solveTest.loading === false
    ) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(-1);
      refetch(); // Quiz is complete, show the result summary
    }

    setQuizAnswers(updatedAnswers);
  };

  const { correctAnswers, wrongAnswers } =
    calculateTotalCorrectAndWrongAnswers();

  useEffect(() => {
    if (sectionId) {
      getSection({ variables: { sectionId } });
      // Reset quiz-related states when testData chan
    }
    console.log(sectionId);
    handleResetQuiz();
  }, [testData, sectionId, getSection]);

  if (loading)
    <div>
      <p>loading...</p>
    </div>;

  return (
    <div>
      {quizStarted === false ? (
        <QuizSynopsis
          totalQuestions={testData.length}
          passScore={Math.ceil((testData.length * 0.5) / testData.length) * 50} // Example pass score (70%)
          onStartQuiz={handleStartQuiz}
          scorePercent={testResult?.courseSection.data.quizData.scorePercent}
          totalAnswered={
            testResult?.courseSection.data.quizData.testResult.length
          }
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
          testSubmitLoading={solveTest.loading}
        />
      )}
    </div>
  );
};

export default Quiz;
