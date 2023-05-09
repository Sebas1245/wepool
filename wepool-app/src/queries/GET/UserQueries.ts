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

export const UPDATE_ONE_USER = gql`
  mutation updateUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
    updateOneUser(data: $data, where: $where) {
      id
      fname
      lname
      email
      phoneNumber
      car {
        brand
        model
        year
        plateNumber
        color
      }
    }
  }
`;
