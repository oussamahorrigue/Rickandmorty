import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;
export const GET_CHARACTER = gql`
  query character($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      episode {
        name
        id
        episode
      }
    }
  }
`;
