import { ColorType, TaskPriority, TaskStatusType } from "@app/constants";

export type ID = string;
export type DateType = number;

export interface UserModel {
  id: ID;
  username: string;
  email: string;
  password: string; // Hashed for security
  avatarURL?: string; // Optional profile picture
  role: UserRole; // Enum for role (admin, member)
  createdAt: DateType;
  updatedAt: DateType;
}

export enum UserRole {
  ADMIN = "admin",
  MEMBER = "member",
}

export interface ProjectModel {
  id: ID;
  ownerID: ID; // Foreign key to UserModel
  title: string;
  description?: string; // Optional project description
  visibility: ProjectVisibility; // Enum (private, public)
  createdAt: DateType;
  updatedAt: DateType;
}

export enum ProjectVisibility {
  PRIVATE = "private",
  PUBLIC = "public",
}

export interface ColumnModel {
  id: ID;
  projectID: ID; // Foreign key to ProjectModel
  title: string;
  position: number; // For ordering column in the project
  color: ColorType;
  createdAt: DateType;
  updatedAt: DateType;
}

export interface TaskModel {
  id: ID;
  columnID: ID; // Foreign key to ColumnModel
  title: string;
  description?: string; // Optional task description
  priority: TaskPriority; // Enum for priority
  dueDate?: DateType; // Optional due date
  status: TaskStatusType; // Enum for task status
  createdAt: DateType;
  updatedAt: DateType;
}

export interface TaskCommentModel {
  id: ID;
  taskID: ID; // Foreign key to TaskModel
  userID: ID; // Foreign key to UserModel
  content: string;
  createdAt: DateType;
  updatedAt: DateType;
}

export interface TaskAttachmentModel {
  id: ID;
  taskID: ID; // Foreign key to TaskModel
  fileURL: string;
  filename: string;
  fileType: FileType; // Enum for file types
  uploadedAt: DateType;
}

export enum FileType {
  IMAGE = "image",
  PDF = "pdf",
  DOC = "doc",
  VIDEO = "video",
  EXCEL = "excel",
}
export interface TaskAssigneeModel {
  cardID: ID; // Foreign key to TaskModel
  userID: ID[]; // Foreign key to UserModel
}

export interface TaskActivityLogModel {
  id: ID;
  taskID: ID; // Foreign key to TaskModel
  userID: ID; // Foreign key to UserModel
  action: string; // E.g., "moved task", "added comment"
  timestamp: DateType;
}
