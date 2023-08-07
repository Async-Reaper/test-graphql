import {gql} from "@apollo/client";

export const GET_ID_USER = gql(`
query($id: ID!) {
  user(id: $id) {
    id
    name
    username
    email
    phone
  }
} 
`);
