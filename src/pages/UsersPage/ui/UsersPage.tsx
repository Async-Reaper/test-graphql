import {useContext, useState} from "react";
import {Alert, Button, Space} from "antd";
import {CreateUserModal} from "@features/CreateUser";
import {UsersList} from "@widgets/UsersList";
import {PopupContext} from "@app/providers/ContextProvider/PopupContext";


const UsersPage = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const {isDeleteUser, isCreateUser} = useContext(PopupContext);

   const showModal = () => {
      setIsModalOpen(true);

   };
   const handleOk = () => {
      setIsModalOpen(false);

   };

   return (
      <Space direction="vertical">
         {
            isDeleteUser && <Alert message="User deleted" type="success" showIcon closable />
         }
         {
            isCreateUser && <Alert message="User created" type="success" showIcon closable />
         }
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
