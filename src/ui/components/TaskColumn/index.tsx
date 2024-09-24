import React, { memo, ReactNode } from "react";
import { Divider } from "@nextui-org/react";
import clsx from "clsx";
import isEqual from "react-fast-compare";

// Components
import { Box, StatusIndicator, TaskItem, Text } from "@app/ui";
// Utils
import { generateURL } from "@app/utils";
// Constants
import { ColorType, ROUTER } from "@app/constants";
// Types
import { TaskType } from "@app/types";

export interface TaskColumnProps {
  title: string;
  color?: ColorType;
  icon?: ReactNode;
  tasks: TaskType[];
}

const TASK_COLUMN_BORDER_COLOR: Record<string, string> = {
  blue: "border-blue-primary",
  green: "border-green-primary",
  lavender: "border-lavender-primary",
  orange: "border-orange-primary",
  red: "border-red-primary",
  violet: "border-violet-primary",
};

export const TaskColumn = memo(
  ({ tasks, title, icon, color = ColorType.VIOLET }: TaskColumnProps) => {
    const taskSize = tasks.length;

    console.log(JSON.stringify(tasks));

    return (
      <Box className="w-96 min-h-48 max-h-full p-5 flex-shrink-0 flex flex-col bg-gray-light rounded-lg">
        <Box as="header" className="flex items-center justify-between">
          <Box className="flex items-center gap-3">
            <StatusIndicator color={color ?? ColorType.BLUE} />
            <Text as="span" className="text-primary capitalize">
              {title}
            </Text>
            {!!taskSize && (
              <Text
                as="span"
                className="inline-flex items-center justify-center bg-gray-medium w-5 h-5 rounded-full text-xs"
              >
                {taskSize}
              </Text>
            )}
          </Box>
          {!!icon && icon}
        </Box>
        <Divider
          className={clsx("my-5 border-t-3", TASK_COLUMN_BORDER_COLOR[color])}
        />
        {!!tasks.length && (
          <Box
            as="section"
            className="flex-1 flex flex-col gap-5 overflow-y-scroll"
          >
            {tasks.map(
              (
                {
                  id,
                  priority,
                  assignees,
                  description,
                  title,
                  commentQuantity,
                  fileQuantity,
                },
                key
              ) => (
                <TaskItem
                  key={key}
                  assignees={assignees}
                  description={description}
                  href={generateURL(ROUTER.TASKS, [id])}
                  priority={priority}
                  title={title}
                  commentQuantity={commentQuantity}
                  fileQuantity={fileQuantity}
                />
              )
            )}
          </Box>
        )}
      </Box>
    );
  },
  isEqual
);
