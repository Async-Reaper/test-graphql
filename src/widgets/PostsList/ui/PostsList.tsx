import React, {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {Button, Card, Col, Pagination, Space} from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import {Loader} from "@shared/ui";

import {GET_ALL_POSTS} from "../model/query/postsQuery";
import {IPostsList} from "../model/types";


const Component = () => {
   const [page, setPage] = useState<number>(1);
   const [limit, setLimit] = useState<number>(10);

   const {loading, error, data} = useQuery(GET_ALL_POSTS, {
      variables: {
         page: page,
         limit: limit,
      }
   });

   const [posts, setPosts] = useState<IPostsList[]>([]);

   useEffect(() => {
      if (!loading && !error) {
         setPosts(data.posts.data);
      } else if (error) {
         console.log(error);
      }
   }, [loading, data]);

   const changePage = (page: number, pageSize: number) => {
      setPage(page);
      setLimit(pageSize);
   };

   return (
      <Space direction="vertical" size="middle">
         {
            loading
               ? <Loader />
               : posts?.map((post) =>
                  <Card key={post.id} title={post.title}>
                     <Col className="gutter-row" key={post.id}>
                        <Paragraph>{post.body}</Paragraph>
                        <Button type="primary" danger>Open</Button>
                     </Col>
                  </Card>
               )
         }
         {
            !loading &&
             <Pagination
                defaultCurrent={page}
                total={data.posts.meta.totalCount}
                onChange={(page, pageSize) => changePage(page, pageSize)}
             />
         }
      </Space>
   );
};

export const PostsList = React.memo(Component);
