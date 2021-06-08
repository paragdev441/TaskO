import React from "react";

const Dashboard = React.lazy(() => import("../containers/Dashboard"));
const CreateTask = React.lazy(() => import("../containers/CreateTask"));
const TaskList = React.lazy(() => import("../containers/TaskList"));
export const routes = [
  {
    path: "/",
    // exact: true,
    component: Dashboard,
  },
  {
    path: "/dashboard",
    // exact: true,
    component: Dashboard,
  },
  {
    path: "/create",
    exact: true,
    component: CreateTask,
  },
  {
    path: "/taskList",
    exact: true,
    component: TaskList,
  },
];
