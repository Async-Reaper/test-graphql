import {ReactNode, useState} from "react";
import {IPopupContext, PopupContext} from "../config/popupContextConfig";

interface Props {
   children: ReactNode
}

export const PopupContextProvider = ({children}: Props) => {
   const [isDeleteUser, setIsDeleteUser] = useState<boolean>(false);
   const [isCreateUser, setIsCreateUser] = useState<boolean>(false);
   const [isDeletePost, setIsDeletePost] = useState<boolean>(false);
   const [isCreatePost, setIsCreatePost] = useState<boolean>(false);

   const value: IPopupContext = {
      isDeleteUser,
      setIsDeleteUser,
      isCreateUser,
      setIsCreateUser,
      isCreatePost,
      setIsCreatePost,
      isDeletePost,
      setIsDeletePost
   };

   return (
      <PopupContext.Provider value={value}>
         {children}
      </PopupContext.Provider>
   );
};
