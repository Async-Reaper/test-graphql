import React, {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {Button, Card, Col, Skeleton, Space} from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import {useParams} from "react-router-dom";
import {GET_ID_USER, IUser} from "@entities/User";
import {DeleteUserModal} from "@features/DeleteUser";

const Component = () => {
   const params = useParams();
   const {loading, error, data} = useQuery(GET_ID_USER, {
      variables: {
         id: params.id
      }
   });
   const [user, setUser] = useState<IUser>();
   const [isModalOpen, setIsModalOpen] = useState(false);
   const showModal = () => {
      setIsModalOpen(true);
   };

   const handleOk = () => {
      setIsModalOpen(false);
   };


   useEffect(() => {
      if(!loading && !error) {
         setUser(data.user);
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
                  <Card title={user?.name}>
                     <Col className="gutter-row">
                        <Paragraph>Username: {user?.username}</Paragraph>
                        <Paragraph>E-mail: {user?.email}</Paragraph>
                        <Paragraph>Phone: {user?.phone}</Paragraph>
                        <Button type="primary" danger onClick={showModal}>Delete</Button>
                     </Col>
                  </Card>
               </Space>
         }
         {
            isModalOpen && <DeleteUserModal id={Number(params.id)} isOpen={isModalOpen} onClose={handleOk} />
         }
      </>
   );
};

export const UserCard = React.memo(Component);
