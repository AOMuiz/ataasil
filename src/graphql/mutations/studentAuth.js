import { gql } from "@apollo/client";

export const CREATE_STUDENT_ACCOUNT = gql`
  mutation Student_register_sendCode(
    $email: String!
    $username: String!
    $password: String!
    $jobSector: JobSector!
    $dateOfBirth: Date!
    $phone: String!
  ) {
    student_register_sendCode(
      email: $email
      username: $username
      password: $password
      jobSector: $jobSector
      dateOfBirth: $dateOfBirth
      phone: $phone
    ) {
      code
      token
    }
  }
`;

export const VERIFY_STUDENT_EMAIL = gql`
  mutation Student_register_verifyCode($token: String!, $code: String!) {
    student_register_verifyCode(token: $token, code: $code) {
      code
      success
      error
      token
      data {
        _id
        email
        username
        isAccountApproved
      }
    }
  }
`;

export const REVERIFY_STUDENT_EMAIL = gql`
  mutation Student_register_resendCode($token: String!) {
    student_register_resendCode(token: $token) {
      code
      success
      error
      token
    }
  }
`;

export const AUTHENTICATE_STUDENT = gql`
  mutation Auth_student_login($email: String!, $password: String!) {
    auth_student_login(email: $email, password: $password) {
      code
      success
      error
      data {
        isAccountApproved
      }
      token
    }
  }
`;
