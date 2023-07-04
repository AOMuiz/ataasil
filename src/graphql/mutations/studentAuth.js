import { gql } from "@apollo/client";

export const CREATE_STUDENT_ACCOUNT = gql`
  mutation Auth_student_register(
    $email: String!
    $username: String!
    $password: String!
    $jobSector: JobSector!
    $dateOfBirth: Date!
    $phone: String!
  ) {
    auth_student_register(
      email: $email
      username: $username
      password: $password
      jobSector: $jobSector
      dateOfBirth: $dateOfBirth
      phone: $phone
    ) {
      error
      success
      token
      code
    }
  }
`;

export const VERIFY_STUDENT_EMAIL = gql`
  mutation Auth_student_verifyEmail($token: String!, $code: String!) {
    auth_student_verifyEmail(token: $token, code: $code) {
      code
      success
      error
      token
    }
  }
`;

export const REVERIFY_STUDENT_EMAIL = gql`
  mutation auth_student_resendVerificationCode(token: $authStudentResendVerificationCodeToken2) {
    code
    success
    error
    token
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
