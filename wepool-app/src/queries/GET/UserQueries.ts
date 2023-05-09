import { gql } from "@apollo/client";

export default gql`
  query GetUser($where: UserWhereUniqueInput!) {
    getUser(where: $where) {
      id
      fname
      lname
      number
      car {
        model
        plateNumber
        year
        color
        brand
      }
      phoneNumber
      email
      street
    }
  }
`;


export const PASSENGER_RIDES = gql`
  query passengerRides($where: UserWhereUniqueInput!) {
    user(where: $where) {
      passengerRides {
        rideId
      }
    }
  }
`;