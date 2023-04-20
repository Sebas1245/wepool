import { gql } from 'apollo-boost';

export default gql`query ExampleQuery {
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