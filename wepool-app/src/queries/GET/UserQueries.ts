import { gql } from "@apollo/client";
//GetUser is getting only Sebas
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
