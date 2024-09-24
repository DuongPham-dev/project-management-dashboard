import {
  ColumnModel,
  ProjectModel,
  TaskModel,
  UserModel,
} from "../models/trello-structure";

export interface TaskType extends TaskModel {
  assignees: UserModel[];
  commentQuantity: number;
  fileQuantity: number;
}

export interface ColumnType extends ColumnModel {
  tasks: TaskType[];
}

export interface ProjectResponse extends ProjectModel {
  columns: ColumnType[];
}
