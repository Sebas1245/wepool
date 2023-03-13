import { Driver, Passenger, Resolvers } from "./types/generated/graphql";

export const resolvers: Resolvers = {
  Query: {
    getDriver: () => {
      const newDriver : Driver = {
        id: "123",
        fname: "Sebas",
        home_address: "Paseo Milan 375",
        home_latitude: 65.65,
        home_longitude: 120.23,
        lname: "Saldana"
      }

      return newDriver;
    },
    getPassenger: () => {
      const newPassenger: Passenger = {
        id: "1234512",
        fname: "Sebas",
        home_address: "Paseo Milan 375",
        home_latitude: 65.65,
        home_longitude: 120.23,
        lname: "Saldana",
      };
      return newPassenger;
    },
  },
};
