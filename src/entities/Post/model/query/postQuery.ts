import {gql} from "@apollo/client";

export const GET_ID_POST = gql(`
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
