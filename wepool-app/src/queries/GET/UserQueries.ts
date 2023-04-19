import { gql } from 'apollo-boost';

export default gql`query ExampleQuery {
    getBerns(where: id: 1) {
      id
      fname
      lname
      number
    }
  }`;