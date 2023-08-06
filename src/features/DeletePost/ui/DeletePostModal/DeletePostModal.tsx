import React from "react";
import {Modal} from "antd";
import {DeletePostForm} from "../DeletePostForm/DeletePostForm";

interface Props {
   id: number;
   isOpen: boolean;
   onClose: () => void;
}

const Component = ({id, isOpen, onClose}: Props) => {
   return (
      <Modal title="Create post" open={isOpen} onCancel={onClose} footer={[""]}>
         <DeletePostForm id={id} onClose={onClose} />
      </Modal>
   );
};

export const DeletePostModal = React.memo(Component);
