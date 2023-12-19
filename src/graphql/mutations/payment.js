import { gql } from "@apollo/client";

export const PAYMEMT_CREATE = gql`
  mutation Payment_create(
    $successUrl: String!
    $cancelUrl: String!
    $purpose: PaymentPurpose!
  ) {
    payment_create(
      successUrl: $successUrl
      cancelUrl: $cancelUrl
      purpose: $purpose
    ) {
      code
      success
      error
      data {
        url
      }
    }
  }
`;
