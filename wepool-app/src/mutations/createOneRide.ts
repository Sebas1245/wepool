import { gql } from "@apollo/client";
import { RideStatus, StartingPoint } from "../services/enums";

export const buildCreateOneRideVariables = (
    startsAt: StartingPoint,
    date: string,
    availableSeats: number,
    driverId: number,
    kmToGoalLocation: number,
  ) => ({
    variables: {
        data: {
            status: RideStatus.OPEN,
            startsAt: startsAt,
            date: date,
            availableSeats: availableSeats,
            driver: {
              connect: {
                id: driverId
              }
            },
            kmToGoalLocation: kmToGoalLocation
        },
      },
  });

export const createOneRide = gql`
  mutation createOneRide($data: RideCreateInput!) {
    createOneRide(data: $data) {
        id
        status
    }
  }
`;