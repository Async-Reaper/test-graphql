import React from "react";
import {Card, Col, Space} from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import {IComment} from "@entities/Post/model/types";

interface Props {
   comments: IComment[]
}

const Component = ({comments}: Props) => {
   return (
      <Space>
         <Title level={3}>
                Comments
         </Title>
         {
            comments.map((comment) =>
               <Card key={comment.id}>
                  <Col className="gutter-row">
                     <Title level={5}>Name: {comment?.name}</Title>
                     <Paragraph>{comment.body}</Paragraph>
                  </Col>
               </Card>
            )
         }
      </Space>
   );
};

export const PostComments = React.memo(Component);
