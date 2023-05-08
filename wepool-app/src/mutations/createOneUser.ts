import { gql } from "@apollo/client";

export const createOneUser = gql`
  mutation createOneUser($data: UserCreateInput!) {
    createOneUser(data: $data) {
      id
      fname
      lname
      email
    }
  }
`;
