import {type RouteProps} from "react-router-dom";
import {MainPage} from "@pages/MainPage";
import {PostIdPage} from "@pages/PostIdPage";
import {PostsPage} from "@pages/PostsPage";

export enum AppRoutes {
   MAIN = "MAIN",
   POSTS = "POSTS",
   POST_ID = "POST_ID"
}

export const RouterPath: Record<AppRoutes, string> = {
   [AppRoutes.MAIN]: "/",
   [AppRoutes.POST_ID]: "/posts/:id",
   [AppRoutes.POSTS]: "/posts"
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
   [AppRoutes.MAIN]: {
      path: RouterPath.MAIN,
      element: <MainPage />
   },
   [AppRoutes.POST_ID]: {
      path: RouterPath.POST_ID,
      element: <PostIdPage />
   },
   [AppRoutes.POSTS]: {
      path: RouterPath.POSTS,
      element: <PostsPage />
   }
};
