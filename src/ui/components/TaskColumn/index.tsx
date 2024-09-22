import React, { memo, ReactNode } from "react";
import { Divider } from "@nextui-org/react";
import clsx from "clsx";

// Components
import { Box, StatusIndicator, TaskItem, Text } from "@app/ui";
// Utils
import { generateURL } from "@app/utils";
// Constants
import { ROUTER } from "@app/constants";
// Types
import { TaskType } from "@app/types";

export interface TaskColumnProps {
  title: string;
  color?: string;
  icon?: ReactNode;
  tasks: TaskType[];
}

export const TaskColumn = memo(
  ({
    tasks,
    title,
    icon,
    color = "border-violet-primary",
  }: TaskColumnProps) => {
    const taskSize = tasks.length;

    return (
      <Box className="min-h-52 p-5 bg-gray-light rounded-lg">
        <Box as="header" className="flex items-center justify-between">
          <Box className="flex items-center gap-3">
            <StatusIndicator />
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
        <Divider className={clsx("my-5 border-t-3", color)} />
        {!!tasks.length && (
          <Box
            as="section"
            className="flex flex-col gap-5 max-h-[750px] overflow-y-scroll no-scrollbar"
          >
            {tasks.map(
              (
                {
                  id,
                  files,
                  priority,
                  assignedUserID,
                  comments = [],
                  description,
                  title,
                },
                key
              ) => (
                <TaskItem
                  key={key}
                  assignedUserID={assignedUserID}
                  description={description}
                  href={generateURL(ROUTER.TASKS, [id])}
                  priority={priority}
                  title={title}
                  commentSize={comments.length}
                  files={files}
                />
              )
            )}
          </Box>
        )}
      </Box>
    );
  }
);
