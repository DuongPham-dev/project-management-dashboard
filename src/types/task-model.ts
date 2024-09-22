// Constants
import { FileExtensionType, TaskPriority, TaskStatus } from "@app/constants";
// Types
import { DateType, ID, UserType } from "@app/types";

export interface TagType {
  id: ID;
  label: string;
}

export interface CommentType {
  id: ID;
  taskID: ID;
  userID: ID;
  content: string;
  createdAt?: DateType;
  updatedAt?: DateType;
}

export interface FileType {
  id: ID;
  taskID: ID;
  fileURL: string;
  filename: string;
  uploadedAt: DateType;
  uploadedBy?: ID;
  fileType?: FileExtensionType;
}

export interface TaskType {
  id: ID;
  title: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
  createdAt: DateType;
  updatedAt: DateType;
  assignedUserID: UserType[]; // Will change to list users info
  parentTaskID?: ID;
  dueDate?: DateType;
  tags?: TagType[]; //  List of tags for the task (can be a separate table).
  files?: FileType[];
  comments?: CommentType[];
}
