import {PostsList} from "@widgets/PostsList";
import {CreatePostModal} from "@features/CreatePost";
import {useState} from "react";
import {Button, Space} from "antd";

const PostsPage = () => {
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
