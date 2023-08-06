import React, {useCallback, useState} from "react";
import {Button, Space} from "antd";
import {useMutation} from "@apollo/client";
import Paragraph from "antd/es/typography/Paragraph";

import {DELETE_POST} from "../../model/query/createPostQuery";


interface Props {
   id: number;
   onClose: () => void;
}

const Component = ({id, onClose}: Props) => {
   const [newPost] = useMutation(DELETE_POST);
   const [isLoading, setIsLoading] = useState<boolean>(false);


   const onDeletePost = useCallback(() => {
      setIsLoading(true);
      newPost({
         variables: {
            id
         }
      }).then(() => {
         setIsLoading(false);
         onClose();
      }).catch((e) => {
         console.log(e);
      });
   }, [newPost]);



   return (
      <Space direction="vertical">
         <Paragraph>
            Are you sure you want to delete the post?
         </Paragraph>
         <Space direction="horizontal">
            <Button type="primary" loading={isLoading} onClick={onDeletePost}>
               Yes
            </Button>
            <Button type="primary" danger loading={isLoading} onClick={onClose}>
               No
            </Button>
         </Space>
      </Space>
   );
};

export const DeletePostForm = React.memo(Component);
