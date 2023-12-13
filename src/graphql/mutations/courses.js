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
