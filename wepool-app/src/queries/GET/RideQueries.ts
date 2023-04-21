import { gql } from 'apollo-boost';

export default gql`query GetOpenRides {
    rides {
        id
        availableSeats
        driver {
          id
          fname
          lname
          phoneNumber
          street
          zipCode
          number
          city
          car {
            id
            brand
            model
            plateNumber
            year
            color
          }
          company {
            id
            street
            number
            zipCode
            city
            state
          }
        }
        startsAt
        status
      }
  }`;