import React from "react";
import { CiBellOn } from "react-icons/ci";

// UI
import { Box, Icon, StatusIndicator } from "@app/ui";

export const NotificationIcon = () => {
  return (
    <Box className="inline-block relative">
      <Icon icon={CiBellOn} />
      <Box className="absolute w-fit h-auto top-[-70%] right-[2px]">
        <StatusIndicator size="xs" color="red" />
      </Box>
    </Box>
  );
};
