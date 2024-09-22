import React from "react";
import { BiPlus } from "react-icons/bi";

// UI
import { Box, Button, TaskColumn } from "@app/ui";
// Mocks
import { mockTasks } from "@app/mocks/task";

const Homepage = () => {
  return (
    <Box className="w-96">
      <TaskColumn
        tasks={mockTasks}
        title="to do"
        icon={
          <Button
            isIconOnly
            size="fit"
            color="violet-rgba"
            className="p-1 rounded-lg"
          >
            <BiPlus />
          </Button>
        }
      />
    </Box>
  );
};

export default Homepage;
