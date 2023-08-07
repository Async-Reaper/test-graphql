import React, {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {Button, Card, Col, Pagination, Skeleton, Space} from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import {useNavigate} from "react-router-dom";
import {DeleteUserModal} from "@features/DeleteUser";

import {IUsersList} from "../model/types";
import {GET_ALL_USERS} from "../model/query/usersQuery";


const Component = () => {
   const [page, setPage] = useState<number>(1);
   const [limit, setLimit] = useState<number>(10);
   const [users, setUsers] = useState<IUsersList[]>([]);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [userId, setUserId] = useState<number>(1);

   const showModal = (id: number) => {
      setUserId(id);
      setIsModalOpen(true);
   };

   const handleOk = () => {
      setIsModalOpen(false);
   };

   const navigate = useNavigate();

   const {loading, error, data} = useQuery(GET_ALL_USERS, {
      variables: {
         page: page,
         limit: limit,
      }
   });

   useEffect(() => {
      if (!loading && !error) {
         setUsers(data.users.data);
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
               : users?.map((user) =>
                  <Card key={user.id} title={user.name}>
                     <Col className="gutter-row">
                        <Paragraph>{user.username}</Paragraph>
                     </Col>
                     <Space direction="horizontal">
                        <Button type="primary" onClick={() => navigate(user.id)}>
                            Open
                        </Button>
                        <Button type="primary" danger onClick={() => showModal(user.id)}>
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
                   total={data.users.meta.totalCount}
                   onChange={(page, pageSize) => changePage(page, pageSize)}
                />
         }
         {
            isModalOpen &&
                <DeleteUserModal id={userId} isOpen={isModalOpen} onClose={handleOk} />
         }
      </Space>
   );
};

export const UsersList = React.memo(Component);
