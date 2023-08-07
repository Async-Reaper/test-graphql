import {PostsList} from "@widgets/PostsList";
import {CreatePostModal} from "@features/CreatePost";
import {useContext, useState} from "react";
import {Alert, Button, Space} from "antd";
import {PopupContext} from "@app/providers/ContextProvider/PopupContext";

const PostsPage = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const {isDeletePost, isCreatePost} = useContext(PopupContext);

   const showModal = () => {
      setIsModalOpen(true);
   };

   const handleOk = () => {
      setIsModalOpen(false);
   };

   return (
      <Space direction="vertical">
         {
            isDeletePost && <Alert message="Post deleted" type="success" showIcon closable />
         }
         {
            isCreatePost && <Alert message="Post created" type="success" showIcon closable />
         }
         <Button type="primary" onClick={showModal}>
            Create post
         </Button>
         {
            isModalOpen && <CreatePostModal isOpen={isModalOpen} onClose={handleOk} />
         }
         <PostsList />
      </Space>
   );
};

export default PostsPage;
