import React, { memo } from "react";

// Components
import { Box, TaskBoardLayoutSwitcher, TaskFilters } from "@app/ui";

export interface TasksActionBarProps {}

export const TasksActionBar = memo(() => (
  <Box as="section" className="flex items-center justify-between">
    <TaskFilters />
    <TaskBoardLayoutSwitcher />
  </Box>
));

TasksActionBar.displayName = "TasksActionBar";
