import React, {useCallback, useEffect, useState} from "react";
import {Button, Input, Space} from "antd";
import {useMutation} from "@apollo/client";
import {ICreateUser} from "../../model/types";
import {CREATE_USER} from "../../model/query/createUserQuery";

interface Props {
   onClose: () => void;
}

const Component = ({onClose}: Props) => {
   const [name, setName] = useState<string>("");
   const [username, setUsername] = useState<string>("");
   const [email, setEmail] = useState<string>("");
   const [phone, setPhone] = useState<string>("");

   const [isDisabled, setIsDisabled] = useState<boolean>(true);
   const [newUser] = useMutation(CREATE_USER);
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const dataCreatePost: ICreateUser = {
      name,
      username,
      email,
      phone
   };

   const onCreateUser = useCallback(() => {
      setIsLoading(true);
      newUser({
         variables: {
            input: dataCreatePost
         }
      }).then(() => {
         setName("");
         setUsername("");
         setEmail("");
         setPhone("");
         setIsLoading(false);
         setIsDisabled(true);
         onClose();
      }).catch((e) => {
         console.log(e);
      });
   }, [
      dataCreatePost,
      setName,
      setUsername,
      setEmail,
      setPhone,
      setIsDisabled,
      setIsLoading,
      newUser
   ]);

   useEffect(() => {
      if (name === "" || username === "" || email === "" || phone === "") {
         setIsDisabled(true);
      } else {
         setIsDisabled(false);
      }
   }, [
      name,
      username,
      email,
      phone,
      setIsDisabled
   ]);

   return (
      <Space direction="vertical">
         <Input
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
         <Input
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
         />
         <Input
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />
         <Input
            placeholder="body"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
         />
         <Button loading={isLoading} disabled={isDisabled} onClick={onCreateUser}>Create user</Button>
      </Space>
   );
};

export const CreateUserForm = React.memo(Component);
