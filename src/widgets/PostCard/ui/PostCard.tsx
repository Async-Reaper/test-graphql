import React, {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {GET_ID_POST, IPost} from "@entities/Post";
import {Button, Card, Col, Skeleton, Space} from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import {useParams} from "react-router-dom";
import Title from "antd/es/typography/Title";
import {DeletePostModal} from "@features/DeletePost";

const Component = () => {
   const params = useParams();
   const {loading, error, data} = useQuery(GET_ID_POST, {
      variables: {
         id: params.id
      }
   });
   const [post, setPost] = useState<IPost>();
   const [isModalOpen, setIsModalOpen] = useState(false);
   const showModal = () => {
      setIsModalOpen(true);
   };

   const handleOk = () => {
      setIsModalOpen(false);
   };


   useEffect(() => {
      if(!loading && !error) {
         setPost(data.post);
      } else if (error) {
         console.log(error);
      }
   }, [loading, data]);

   return (
      <>
         {
            loading
               ? <Skeleton />
               : <Space direction="vertical">
                  <Card title={post?.title}>
                     <Col className="gutter-row">
                        <Paragraph>{post?.body}</Paragraph>
                        <Button type="primary" danger onClick={showModal}>Delete</Button>
                     </Col>
                  </Card>
                  <Title level={3}>
                      Comments
                  </Title>
                  {
                     post?.comments.data.map((comment) =>
                        <Card key={comment.id}>
                           <Col className="gutter-row">
                              <Title level={5}>Name: {comment?.name}</Title>
                              <Paragraph>{comment.body}</Paragraph>
                           </Col>
                        </Card>
                     )
                  }
               </Space>
         }
         {
            isModalOpen && <DeletePostModal id={Number(params.id)} isOpen={isModalOpen} onClose={handleOk} />
         }
      </>
   );
};

export const PostCard = React.memo(Component);
