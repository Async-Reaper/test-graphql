import {gql} from "@apollo/client";

export const GET_ALL_POSTS = gql(`
query($limit: Int, $page: Int) {
  posts(options: {paginate: {limit: $limit, page: $page}}) {
    data {
        id
        title
        body
        user {
          name
          email
        }
    }
    meta {
      totalCount
    }
  }
}    
`);
