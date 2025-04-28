import { gql } from "@apollo/client";

export const GET_TRANSACTIONS = gql`
  query GetTransactions {
    transactions {
      _id
      amount
      description
      category
      paymentType
      location
      date
    }
  }
`;

export const GET_TRANSACTION = gql`
  query getTransaction($transactionId: ID!) {
    transaction(transactionId: $transactionId) {
      _id
      amount
      description
      category
      paymentType
      location
      date
    }
  }
`;

export const GET_TRANSACTION_STATISTICS = gql`
  query GetTransactionStatistics {
    categoryStatistics {
      category
      totalAmount
    }
  }
`;
