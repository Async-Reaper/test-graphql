import {PostCard} from "@widgets/PostCard";
import {useNavigate} from "react-router-dom";
import {Button, Space} from "antd";
import {CreatePostModal} from "@features/CreatePost";
import {useState} from "react";
import {DeletePostModal} from "@features/DeletePost";

const PostIdPage = () => {
   const navigate = useNavigate();

   const [isModalOpen, setIsModalOpen] = useState(false);
   const showModal = () => {
      setIsModalOpen(true);
   };

   const handleOk = () => {
      setIsModalOpen(false);
   };
   return (
      <Space direction="vertical">
         <Button type="link" onClick={() => navigate("/posts")}>Back to posts</Button>
         <PostCard />
      </Space>
   );
};

export default PostIdPage;
