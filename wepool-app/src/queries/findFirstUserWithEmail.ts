import { gql } from "@apollo/client";

export const findFirstUserWithEmail = gql`
  query FindFirstUserWithEmail($where: UserWhereInput) {
    findFirstUser(where: $where) {
      id
      fname
      lname
      email
    }
  }
`;
