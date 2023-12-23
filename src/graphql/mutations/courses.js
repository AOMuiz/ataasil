import { gql } from "@apollo/client";

export const ADD_TO_CART = gql`
  mutation Courses_addToCart($courseIds: [ID!]!) {
    courses_addToCart(courseIds: $courseIds) {
      code
      success
      error
      data {
        _id
        title
        description
        banner
        liveSessions {
          link
          time
          timezone
          description
        }
        createdAt
        teacher {
          _id
          email
          username
          isAccountActivated
        }
        category
        price
        hasAccess
        progress
        sectionCount
        studentCount
      }
    }
  }
`;
export const REMOVE_FROM_CART = gql`
  mutation Courses_removeFromCart($courseIds: [ID!]!) {
    courses_removeFromCart(courseIds: $courseIds) {
      code
      success
      error
      data {
        _id
        title
        description
        banner
        liveSessions {
          link
          time
          timezone
          description
        }
        createdAt
        teacher {
          _id
          email
          username
          isAccountActivated
        }
        category
        price
        hasAccess
        progress
        sectionCount
        studentCount
      }
    }
  }
`;

export const COURSES_SECTIONS_SOLVE_TEST = gql`
  mutation CourseSection_solveTest(
    $courseId: ID!
    $sectionId: ID!
    $questionId: ID!
    $answers: [String!]!
  ) {
    courseSection_solveTest(
      courseId: $courseId
      sectionId: $sectionId
      questionId: $questionId
      answers: $answers
    ) {
      code
      success
      error
      data {
        courseSection {
          _id
          course
          title
          banner
          notes
          description
          files {
            format
            src
            contentType
            size
            description
            title
            isPreview
          }
          test {
            _id
            question
            options
            answers
            isAnswerMultiple
            score
          }
          isCompleted
        }
        quizData {
          testResult {
            _id
            score
            defaultScore
          }
          score
          scorePercent
          obtainableScore
        }
        recentQuestionData {
          studentScore
          wrongAnswers
          correctAnswers
        }
      }
    }
  }
`;
