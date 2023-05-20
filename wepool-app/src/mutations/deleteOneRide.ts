import { gql } from "@apollo/client";

export const deleteOneRide = gql`
    mutation DeleteOneRide($where: RideWhereUniqueInput!) {
        deleteOneRide(where: $where) {
            id
        }
    }
`;