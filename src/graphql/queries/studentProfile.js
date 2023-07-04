import { gql } from "@apollo/client";

export const STUDENT_PROFILE = gql`
  query Student {
    student {
      _id
      email
      username
      jobSector
      dateOfBirth
      isAccountApproved
      phone
      phoneCountryCode
      phoneRelevant
    }
  }
`;
