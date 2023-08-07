import {useState} from "react";
import {Button, Space} from "antd";
import {CreateUserModal} from "@features/CreateUser";
import {UsersList} from "@widgets/UsersList";

const UsersPage = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const showModal = () => {
      setIsModalOpen(true);
   };

   const handleOk = () => {
      setIsModalOpen(false);
   };

   return (
      <Space direction="vertical">
         <Button type="primary" onClick={showModal}>
                Create user
         </Button>
         {
            isModalOpen && <CreateUserModal isOpen={isModalOpen} onClose={handleOk} />
         }
         <UsersList />
      </Space>
   );
};

export default UsersPage;
