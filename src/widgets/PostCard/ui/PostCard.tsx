import React, {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {GET_ID_POST, IPost} from "@entities/Post";
import {Button, Card, Col, Skeleton, Space} from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import {useParams} from "react-router-dom";
import {DeletePostModal} from "@features/DeletePost";
import {PostComments} from "@widgets/PostCard/ui/PostComments/PostComments";

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
   }, [loading, data, error]);

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
                  {
                     post?.comments.data &&
                      <PostComments comments={post.comments.data} />
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
