import { gql } from "@apollo/client";

export const COURSES = gql`
  query Courses($pagination: PaginationInput!) {
    courses(pagination: $pagination) {
      _id
      title
      description
      banner
      category
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
    }
  }
`;

export const COURSES_SECTIONS = gql`
  query Course_getSections($courseId: ID!) {
    course_getSections(courseId: $courseId) {
      _id
      course {
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
      }
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
      }
      test {
        question
        options
        answer
      }
    }
  }
`;
