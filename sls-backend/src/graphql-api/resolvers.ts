import { User } from "../../prisma/generated/type-graphql";
export const resolvers = {
  Query: {
    getDriver: () => {
      const newDriver : User = {
        id: 12356,
        fname: "Sebas",
        lname: "Saldana",
        createdAt: new Date(),
        updatedAt: new Date(),
        latitude: 0,
        longitude: 0
    }

      return newDriver;
    },
    getPassenger: () => {
      const newPassenger : User = {
          id: 12356,
          fname: "Sebas",
          lname: "Saldana",
          createdAt: new Date(),
          updatedAt: new Date(),
          latitude: 0,
          longitude: 0
      }
      return newPassenger;
    }
  },
};
