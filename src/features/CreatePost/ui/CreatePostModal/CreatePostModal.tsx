import React from "react";
import {Modal} from "antd";
import {CreatePostForm} from "../CreatePostForm/CreatePostForm";

interface Props {
   isOpen: boolean;
   onClose: () => void;
}

const Component = ({isOpen, onClose}: Props) => {
   return (
      <Modal title="Create post" open={isOpen} onCancel={onClose} footer={[""]}>
         <CreatePostForm onClose={onClose} />
      </Modal>
   );
};

export const CreatePostModal = React.memo(Component);
