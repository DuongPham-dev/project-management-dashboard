import { Chip } from "@nextui-org/react";
import clsx from "clsx";

// Constants
import { TaskPriority, TaskStatusType } from "@app/constants";

export interface TaskStatusProps {
  label: string;
  status: TaskPriority | TaskStatusType;
}

export const TaskStatus = ({ label, status }: TaskStatusProps) => {
  const STATUS = {
    [TaskPriority.LOW]: "bg-orange-rgba-light text-orange-secondary",
    [TaskPriority.NORMAL]: "",
    [TaskPriority.MEDIUM]: "",
    [TaskPriority.HIGH]: "bg-red-rgba-light text-red-primary",
    [TaskStatusType.COMPLETED]: "bg-green-rgba-light text-green-primary",
    [TaskStatusType.TODO]: "bg-violet-rgba-light text-violet-primary",
    [TaskStatusType.IN_PROGRESS]: "bg-blue-rgba-light text-blue-primary",
  };

  return (
    <Chip className={clsx("rounded-lg p-1 text-xs capitalize", STATUS[status])}>
      {label}
    </Chip>
  );
};
