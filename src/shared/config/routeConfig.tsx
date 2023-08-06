import {type RouteProps} from "react-router-dom";
import {MainPage} from "@pages/MainPage";
import {PostIdPage} from "@pages/PostIdPage";
import {PostsPage} from "@pages/PostsPage";
import {UsersPage} from "@pages/UsersPage";
import {UserIdPage} from "@pages/UserIdPage";

export enum AppRoutes {
   MAIN = "MAIN",
   POSTS = "POSTS",
   POST_ID = "POST_ID",
   USERS = "USERS",
   USER_ID = "USER_ID"
}

export const RouterPath: Record<AppRoutes, string> = {
   [AppRoutes.MAIN]: "/",
   [AppRoutes.POSTS]: "/posts",
   [AppRoutes.POST_ID]: "/posts/:id",
   [AppRoutes.USERS]: "/users",
   [AppRoutes.USER_ID]: "/users/:id"
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
   [AppRoutes.MAIN]: {
      path: RouterPath.MAIN,
      element: <MainPage />
   },
   [AppRoutes.POSTS]: {
      path: RouterPath.POSTS,
      element: <PostsPage />
   },
   [AppRoutes.POST_ID]: {
      path: RouterPath.POST_ID,
      element: <PostIdPage />
   },
   [AppRoutes.USERS]: {
      path: RouterPath.USERS,
      element: <UsersPage />
   },
   [AppRoutes.USER_ID]: {
      path: RouterPath.USER_ID,
      element: <UserIdPage />
   }
};
