import {useNavigate} from "react-router-dom";
import {Button, Space} from "antd";
import {UserCard} from "@widgets/UserCard";

const UserIdPage = () => {
   const navigate = useNavigate();

   return (
      <Space direction="vertical">
         <Button type="link" onClick={() => navigate("/users")}>Back to users</Button>
         <UserCard />
      </Space>
   );
};

export default UserIdPage;
