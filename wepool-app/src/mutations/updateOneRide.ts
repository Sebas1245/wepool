import { gql } from "@apollo/client";

export const buildUpdateRideAddPassengerVariables = (
  rideId: number,
  passengerId: number
) => ({
  variables: {
    data: {
      availableSeats: {
        decrement: 1,
      },
      passengers: {
        connectOrCreate: [
          {
            create: {
              passenger: {
                connect: {
                  id: passengerId,
                },
              },
            },
            where: {
              id: passengerId,
            },
          },
        ],
      },
    },
    where: {
      id: rideId,
    },
  },
});

export const buildUpdateRideRemovePassengerVariables = (
  rideId: number,
  passengerId: number
) => ({
  variables: {
    data: {
      availableSeats: {
        increment: 1,
      },
      passengers: {
        deleteMany: [
          {
            passengerId: {
              equals: passengerId,
            },
          },
        ],
      },
    },
    where: {
      id: rideId,
    },
  },
});

export const UPDATE_ONE_RIDE = gql`
  mutation UpdateOneRide(
    $data: RideUpdateInput!
    $where: RideWhereUniqueInput!
  ) {
    updateOneRide(data: $data, where: $where) {
      id
      availableSeats
      driver {
        id
        fname
        lname
      }
      passengers {
        passenger {
          id
          fname
          lname
        }
      }
    }
  }
`;
