import React, {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {Button, Card, Col, Pagination, Skeleton, Space} from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import {useNavigate} from "react-router-dom";

import {GET_ALL_POSTS} from "../model/query/postsQuery";
import {IPostsList} from "../model/types";
import {DeletePostModal} from "@features/DeletePost";


const Component = () => {
   const [page, setPage] = useState<number>(1);
   const [limit, setLimit] = useState<number>(10);
   const [posts, setPosts] = useState<IPostsList[]>([]);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [postId, setPostId] = useState<number>(1);

   const showModal = (id: number) => {
      setPostId(id);
      setIsModalOpen(true);
   };

   const handleOk = () => {
      setIsModalOpen(false);
   };

   const navigate = useNavigate();

   const {loading, error, data} = useQuery(GET_ALL_POSTS, {
      variables: {
         page: page,
         limit: limit,
      }
   });

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
               ? <Skeleton />
               : posts?.map((post) =>
                  <Card key={post.id} title={post.title}>
                     <Col className="gutter-row" key={post.id}>
                        <Paragraph>{post.body}</Paragraph>
                     </Col>
                     <Space direction="horizontal">
                        <Button type="primary" onClick={() => navigate(post.id)}>
                           Open
                        </Button>
                        <Button type="primary" danger onClick={() => showModal(post.id)}>
                           Delete
                        </Button>
                     </Space>
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
         {
            isModalOpen &&
             <DeletePostModal id={postId} isOpen={isModalOpen} onClose={handleOk} />
         }
      </Space>
   );
};

export const PostsList = React.memo(Component);
