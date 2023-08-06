import {IUser} from "@entities/User";

export interface IPost {
   id: number;
   title: string;
   body: string
   user: IUser;
   comments: IComment[];
}

interface IComment {
   id: number;
   name: string;
   body: string;
}
