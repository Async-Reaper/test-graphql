import {memo} from "react";
import {Modal} from "antd";
import {DeleteUserForm} from "../DeleteUserForm/DeleteUserForm";

interface Props {
   id: number;
   isOpen: boolean;
   onClose: () => void;
}

export const DeleteUserModal = memo(({id, isOpen, onClose}: Props) => {
   return (
      <Modal title="Create post" open={isOpen} onCancel={onClose} footer={[""]}>
         <DeleteUserForm id={id} onClose={onClose} />
      </Modal>
   );
});
