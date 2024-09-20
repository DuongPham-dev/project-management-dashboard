import React from "react";
import { BiPlus } from "react-icons/bi";

// UI
import { Box, Button, TaskColumn } from "@app/ui";

const Homepage = () => {
  return (
    <Box className="w-96">
      <TaskColumn
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
