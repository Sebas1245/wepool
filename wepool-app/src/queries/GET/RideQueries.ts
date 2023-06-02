import { gql } from "@apollo/client";

export default gql`
  query GetOpenRides {
    rides(where: { status: { equals: OPEN } }) {
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
      date
    }
  }
`;

export const GET_MY_RIDES = gql`
  query GetMyRides($where: RideWhereInput) {
    rides(where: $where) {
      id
      driverId
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
      date
    }
  }
`;

export const buildGetMyRidesVariables = (userId: number | undefined) => ({
  where: {
    driverId: {
      not: {
        equals: userId,
      },
    },
    passengers: {
      every: {
        passengerId: {
          equals: userId,
        },
      },
    },
  },
});
