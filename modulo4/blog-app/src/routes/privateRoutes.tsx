/*import { PostList } from "../pages/Posts";
import { Categories } from "../pages/Categories";
import { Users } from "../pages/Users";
import { DashboardLayout } from "../layouts/DashboardLayout";
import type { RouteObject } from "react-router-dom";

export const privateRoutes: RouteObject = {
  path: "/dashboard",
  element: <DashboardLayout />,
  children: [
    { path: "posts", element: <PostList /> },
    { path: "categories", element: <Categories /> },
    { path: "users", element: <Users /> },
  ],
};