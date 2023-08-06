import React, {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {GET_ID_POST, IPost} from "@entities/Post";
import {Button, Card, Col, Skeleton} from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import {useParams} from "react-router-dom";

const Component = () => {
   const params = useParams();
   const {loading, error, data} = useQuery(GET_ID_POST, {
      variables: {
         id: params.id
      }
   });
   const [post, setPost] = useState<IPost>();


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
               : <Card title={post?.title}>
                  <Col className="gutter-row">
                     <Paragraph>{post?.body}</Paragraph>
                     <Button type="primary" danger>Delete</Button>
                  </Col>
               </Card>
         }
      </>
   );
};

export const PostCard = React.memo(Component);
