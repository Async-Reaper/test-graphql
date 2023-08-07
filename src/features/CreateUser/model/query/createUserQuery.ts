import {gql} from "@apollo/client";

export const CREATE_USER = gql(`
    mutation($input: CreatePostInput!) {
      createUser(input: $input) {
        title
        body
      }
    }
`);
