import {memo} from "react";
import {Modal} from "antd";
import {CreateUserForm} from "../CreateUserForm/CreateUserForm";

interface Props {
   isOpen: boolean;
   onClose: () => void;
}

export const CreateUserModal = memo(({isOpen, onClose}: Props) => {
   return (
      <Modal title="Create user" open={isOpen} onCancel={onClose} footer={[""]}>
         <CreateUserForm onClose={onClose} />
      </Modal>
   );
});
