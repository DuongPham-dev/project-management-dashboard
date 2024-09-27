import React, { memo } from "react";
import isEqual from "react-fast-compare";
import { BiPlus } from "react-icons/bi";
import { ButtonProps } from "@nextui-org/button";

// Components
import { Box, Button, TaskColumn } from "@app/ui";
// Types
import { ProjectResponse } from "@app/types";
// Constants
import { SizeType } from "@app/constants";

export interface TaskBoardProps {
  columns: ProjectResponse["columns"];
}

export const TaskBoard = memo(({ columns }: TaskBoardProps) => {
  return (
    <Box as="section" className="w-fit h-full min-h-64 flex items-start gap-10">
      {columns.map(({ id, tasks, title, color }) => {
        const isTodoColumn = title
          .replaceAll(" ", "")
          .toLowerCase()
          .includes("todo");

        const todoAction = {
          icon: (
            <Button
              isIconOnly
              size={SizeType.FIT}
              color={`${color}-rgba` as unknown as ButtonProps["color"]}
              className="p-1 rounded-lg"
            >
              <BiPlus />
            </Button>
          ),
        };

        return (
          <TaskColumn
            key={id}
            tasks={tasks}
            title={title}
            color={color}
            {...(isTodoColumn && todoAction)}
          />
        );
      })}
    </Box>
  );
}, isEqual);

TaskBoard.displayName = "TaskBoard";
