import {gql} from "@apollo/client";

export const GET_ALL_USERS = gql(`
query($limit: Int, $page: Int) {
  users(options: {paginate: {limit: $limit, page: $page}}) {
    data {
      id
      name
      username
      email
      phone
    }
    meta {
      totalCount
    }
  }
}
`);
