import { gql } from '@apollo/client';

export default gql`query GetOpenRides {
    rides(where: {status: {equals: OPEN}}) {
      id
      driver {
        id
        fname
        lname
        phoneNumber
        street
        state
        city
        country
        zipCode
        number
        carId
        car {
          id
          brand
          model
          plateNumber
          year
          color
          capacity
        }
        company {
          id
          street
          number
          city
          state
          country
          zipCode
          name
        }
      }
      availableSeats
      startsAt
      status
    }
  }`;