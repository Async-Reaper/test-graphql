import {PostCard} from "@widgets/PostCard";
import {useNavigate} from "react-router-dom";
import {Button, Space} from "antd";

const PostIdPage = () => {
   const navigate = useNavigate();

   return (
      <Space direction="vertical">
         <Button type="link" onClick={() => navigate("/posts")}>Back to posts</Button>
         <PostCard />
      </Space>
   );
};

export default PostIdPage;
