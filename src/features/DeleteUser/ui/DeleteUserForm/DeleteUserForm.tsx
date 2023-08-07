import React, {useCallback, useContext, useState} from "react";
import {Button, Space} from "antd";
import {useMutation} from "@apollo/client";
import Paragraph from "antd/es/typography/Paragraph";
import {useNavigate} from "react-router-dom";
import {PopupContext} from "@app/providers/ContextProvider/PopupContext";

import {DELETE_USER} from "../../model/query/deleteUserQuery";


interface Props {
   id: number;
   onClose: () => void;
}

const Component = ({id, onClose}: Props) => {
   const [newPost] = useMutation(DELETE_USER);
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const navigate = useNavigate();
   const {setIsDeleteUser} = useContext(PopupContext);

   const onDeleteUser = useCallback(() => {
      setIsLoading(true);
      newPost({
         variables: {
            id
         }
      }).then(() => {
         navigate("/users");
         setIsDeleteUser(true);
         setIsLoading(false);
         onClose();
      }).catch((e) => {
         console.log(e);
      });
   }, [newPost]);



   return (
      <Space direction="vertical">
         <Paragraph>
                Are you sure you want to delete the user?
         </Paragraph>
         <Space direction="horizontal">
            <Button type="primary" loading={isLoading} onClick={onDeleteUser}>
                    Yes
            </Button>
            <Button type="primary" danger loading={isLoading} onClick={onClose}>
                    No
            </Button>
         </Space>
      </Space>
   );
};

export const DeleteUserForm = React.memo(Component);
