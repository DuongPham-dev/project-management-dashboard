// Types
import { DateType, ID } from "@app/types";
// Constants
import { ProjectStatus } from "@app/constants";

export interface ProjectType {
  id: ID;
  name: string;
  createdBy: ID; // referencing the user who created the project.
  startDate: DateType;
  endDate: DateType;
  description?: string;
  status?: ProjectStatus;
}
