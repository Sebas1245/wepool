import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type Query {
    getDriver: Driver
  }

  type Driver {
    id: ID!
    fname: String!
    lname: String!
    home_address: String!
    home_latitude: Int!
    home_longitude: Int!
  }

  type Passenger {
    id: ID!
    fname: String!
    lname: String!
    home_address: String!
    home_latitude: Int!
    home_longitude: Int!
  }

  schema {
    query: Query
  }
`;
