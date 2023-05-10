import { gql } from "@apollo/client";

export default gql`
  query GetUser($where: UserWhereUniqueInput!) {
    getUser(where: $where) {
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
      phoneNumber
      email
      street
    }
  }
`;
export const GET_USERS_ORDERED_ID = gql`
query getUsers($orderBy: [UserOrderByWithRelationInput!]) {
  users(orderBy: {orderBy: {id: desc}}) {
    id
    fname
  }
}
`;

export const PASSENGER_RIDES = gql`
  query passengerRides($where: UserWhereUniqueInput!) {
    user(where: $where) {
      passengerRides {
        rideId
      }
    }
  }
`;

export const UPDATE_ONE_USER = gql`
  mutation updateUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
    updateOneUser(data: $data, where: $where) {
      __typename
      id
      fname
      lname
      email
      phoneNumber
      car {
        brand
        model
        year
        plateNumber
        color
      }
    }
  }
`;

export const buildUpdateOneUserVariables = (
  isCreatingCarForFirstTime: boolean,
  userId: number,
  userPhoneNumber: string,
  carData?: {
    brand: string;
    model: string;
    year: number;
    color: string;
    plateNumber: string;
  }
) => {
  // If we are getting a car data object with no attributes set, we are assuming user is deleting their car information
  if (
    !carData?.brand &&
    !carData?.model &&
    !carData?.year &&
    !carData?.color &&
    !carData?.plateNumber
  ) {
    return {
      data: {
        car: {
          delete: !isCreatingCarForFirstTime,
        },
        phoneNumber: {
          set: userPhoneNumber,
        },
      },
      where: {
        id: userId,
      },
    };
  }
  if (isCreatingCarForFirstTime) {
    return {
      data: {
        car: {
          connectOrCreate: {
            create: {
              model: carData.model,
              brand: carData.brand,
              year: carData.year,
              color: carData.color,
              plateNumber: carData.plateNumber,
            },
            where: {
              driverId: userId,
            },
          },
        },
        phoneNumber: {
          set: userPhoneNumber,
        },
      },
      where: {
        id: userId,
      },
    };
  }
  return {
    data: {
      car: {
        update: {
          brand: {
            set: carData.brand,
          },
          color: {
            set: carData.color,
          },
          model: {
            set: carData.model,
          },
          year: {
            set: carData.year,
          },
          plateNumber: {
            set: carData.plateNumber,
          },
        },
      },
      phoneNumber: {
        set: userPhoneNumber,
      },
    },
    where: {
      id: userId,
    },
  };
};
