import { gql } from 'apollo-boost';

export default gql`query GetOpenRides {
    ride(where: {id: 1}) {
        id
        availableSeats
        driver {
          id
          fname
          lname
          phoneNumber
          car {
            id
            brand
            model
            plateNumber
            year
            color
          }
          street
          zipCode
          number
          city
        }
        startsAt
        status
      }
  }`;