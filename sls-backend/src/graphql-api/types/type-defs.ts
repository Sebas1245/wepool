export const typeDefs = `#graphql
  type Query {
    getDriver: Driver
    getPassenger: Passenger
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
