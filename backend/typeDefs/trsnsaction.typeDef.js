const transactionTypeDef = `#graphql
    type Transaction {
         _id: ID!
        userID: ID!
        description:String!
        paymentType:String!
        category:String!
        amount:Float!
        location:String
        date:String!
        user: User!
        }
    type Query {
        transactions : [Transaction!]
        transaction(transactionId:ID!) : Transaction
        categoryStatistics:[categoryStatistics!]
        }
    type Mutation {
        createTransaction(input: CreateTransactionInput!) : Transaction!
        updateTransaction(input: UpdateTransactionInput!) : Transaction!
        deleteTransaction(transactionId:ID!): Transaction!
        }
    type categoryStatistics{
            category:String!
            totalAmount:Float!
        }
    input CreateTransactionInput {
        description:String!
        paymentType:String!
        category:String!
        amount:Float!
        location:String
        date:String!
        }
    input UpdateTransactionInput{
        transactionId: ID!
        description:String
        paymentType:String
        category:String
        amount:Float
        location:String
        date:String
        }
`;

export default transactionTypeDef;
