import { gql } from "@apollo/client";

export const getCar = gql`
query GetCar($where: CarWhereUniqueInput!) {
    getCar(where: $where) {
      id
      brand
      model
      year
      color
      capacity
      plateNumber
      driverId
    }
  }
`;