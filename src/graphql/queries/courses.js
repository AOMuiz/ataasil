import { gql } from "@apollo/client";

export const COURSE = gql`
  query Course($courseId: ID!) {
    course(courseId: $courseId) {
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
`;

export const COURSES = gql`
  query Courses($pagination: PaginationInput!) {
    courses(pagination: $pagination) {
      _id
      title
      description
      banner
      createdAt
      category
      price
      teacher {
        username
      }
      hasAccess
      progress
      sectionCount
      studentCount
    }
  }
`;

export const COURSES_SECTIONS = gql`
  query Course_getSections($courseId: ID!) {
    course_getSections(courseId: $courseId) {
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
  }
`;
