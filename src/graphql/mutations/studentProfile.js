import { gql } from "@apollo/client";

export const STUDENT_UPDATE_PROFILE = gql`
  mutation Student_updateProfile(
    $username: String!
    $jobSector: JobSector!
    $dateOfBirth: Date!
    $phone: String!
  ) {
    student_updateProfile(
      username: $username
      jobSector: $jobSector
      dateOfBirth: $dateOfBirth
      phone: $phone
    ) {
      code
      success
      error
      token
    }
  }
`;
