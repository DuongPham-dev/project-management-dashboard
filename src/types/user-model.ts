// Types
import { DateType, ID } from "@app/types";

export interface UserType {
  id: ID;
  name: string;
  email: string;
  password: string;
  createdAt: DateType;
  avatarURL?: string;
}
