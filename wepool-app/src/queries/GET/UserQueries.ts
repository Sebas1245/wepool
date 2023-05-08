import { gql } from '@apollo/client';
//GetUser is getting only Sebas
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