import {gql} from "@apollo/client";

export const GET_ID_USER = gql(`
query($id: ID!)  {
  post(id: $id) {
    id
    title
    body
    comments {
      data {
        id
        name
        body
      }
    }
  }
}  
`);
