import {memo} from "react";
import {Modal} from "antd";
import {CreatePostForm} from "../CreatePostForm/CreatePostForm";

interface Props {
   isOpen: boolean;
   onClose: () => void;
}

export const CreatePostModal = memo(({isOpen, onClose}: Props) => {
   return (
      <Modal title="Create post" open={isOpen} onCancel={onClose} footer={[""]}>
         <CreatePostForm onClose={onClose} />
      </Modal>
   );
});
