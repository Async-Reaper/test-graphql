import {createContext, Dispatch, SetStateAction} from "react";

export interface IPopupContext {
   isDeleteUser: boolean;
   setIsDeleteUser: Dispatch<SetStateAction<boolean>>;
   isDeletePost: boolean;
   setIsDeletePost: Dispatch<SetStateAction<boolean>>;
   isCreateUser: boolean;
   setIsCreateUser: Dispatch<SetStateAction<boolean>>;
   isCreatePost: boolean;
   setIsCreatePost: Dispatch<SetStateAction<boolean>>;
}

export const PopupContext = createContext<IPopupContext>({
   isDeleteUser: false,
   setIsDeleteUser: () => true || false,
   isDeletePost: false,
   setIsDeletePost: () => true || false,
   isCreateUser: false,
   setIsCreateUser: () => true || false,
   isCreatePost: false,
   setIsCreatePost: () => true || false,
});
