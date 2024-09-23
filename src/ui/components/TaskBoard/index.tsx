import React, { memo } from "react";
import isEqual from "react-fast-compare";
import { BiPlus } from "react-icons/bi";

// Components
import { Box, Button, TaskColumn } from "@app/ui";

// Mocks
import { mockTasks } from "@app/mocks";
// Constants
import { ColorType, SizeType } from "@app/constants";

export const TaskBoard = memo(() => {
  return (
    <Box as="section" className="h-full min-h-64 flex items-start gap-10">
      <TaskColumn
        tasks={mockTasks}
        title="to do"
        icon={
          <Button
            isIconOnly
            size={SizeType.FIT}
            color={ColorType.VIOLET_RGBA}
            className="p-1 rounded-lg"
          >
            <BiPlus />
          </Button>
        }
      />
      <TaskColumn
        tasks={mockTasks.slice(1)}
        title="on progress"
        color={ColorType.ORANGE}
      />
      <TaskColumn tasks={[]} title="done" color={ColorType.BLUE} />
    </Box>
  );
}, isEqual);

TaskBoard.displayName = "TaskBoard";
