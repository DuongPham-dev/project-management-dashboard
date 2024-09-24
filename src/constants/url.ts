export const ROUTER = {
  ROOT: "/",
  MESSAGES: "/messages",
  TASKS: "/tasks",
  MEMBERS: "/members",
  SETTINGS: "/settings",
  PROFILE: "/user/profile",
  PROJECTS: "/projects",
};

export const ENDPOINT = {
  PROJECTS: "/projects",
};

export const DYNAMIC_PARAMS = {
  PROJECT_ID: "projectID",
  TASK_ID: "taskID",
};

export const API = {
  MAIN: process.env.TASKS_API ?? "",
};
