import { gql } from '@apollo/client';

export default gql`query GetUser {
    getUser(where: {id: 2}) {
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
    }
  }`;