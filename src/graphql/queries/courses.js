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
        _id
        username
      }
      hasAccess
      progress
      sectionCount
      studentCount
    }
  }
`;

export const COURSES_COUNT = gql`
  query Courses_count($filter: CourseFilter) {
    courses_count(filter: $filter)
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

export const COURSES_GET_CART = gql`
  query Courses_getFromCart {
    courses_getFromCart {
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

export const COURSES_SUBSCRIBED = gql`
  query Courses_subscribed(
    $pagination: PaginationInput!
    $filter: CourseFilter
  ) {
    courses_subscribed(pagination: $pagination, filter: $filter) {
      _id
      title
      description
      banner
      createdAt
      category
      price
      teacher {
        _id
        username
      }
      hasAccess
      progress
      sectionCount
      studentCount
    }
  }
`;
