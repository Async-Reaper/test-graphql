import {PostCard} from "@widgets/PostCard";
import {useNavigate} from "react-router-dom";
import {Button} from "antd";

const PostIdPage = () => {
   const navigate = useNavigate();
   return (
      <div>
         <Button type="link" onClick={() => navigate("/posts")}>Back to posts</Button>
         <PostCard />
      </div>
   );
};

export default PostIdPage;
