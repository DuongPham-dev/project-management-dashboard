// Constants
import { TaskPriority } from "@app/constants";

export interface TaskType {
  id: string | number; // Database not yet selected for the application (maybe is the MongooseDB)
  priority: TaskPriority;
  title: string;
  description?: string;
  //   assignedUsers: User[]; // Array of user objects (avatars)
  imageUrl?: string;
}
