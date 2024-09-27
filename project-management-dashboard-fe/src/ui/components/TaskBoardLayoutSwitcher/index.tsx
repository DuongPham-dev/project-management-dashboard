import React, { memo } from "react";
import { MdOutlineGridView, MdOutlineViewHeadline } from "react-icons/md";

// Components
import { Box, Button, Icon } from "@app/ui";
// Constants
import { ColorType } from "@app/constants";

// TODO: Will add the type when I find the matching design
export interface TaskBoardLayoutSwitcherProps {}

export const TaskBoardLayoutSwitcher = memo(() => {
  return (
    <Box className="flex items-center gap-2">
      <Button isIconOnly>
        <Icon icon={MdOutlineViewHeadline} />
      </Button>
      <Button isIconOnly color={ColorType.TRANSPARENT}>
        <Icon icon={MdOutlineGridView} />
      </Button>
    </Box>
  );
});

TaskBoardLayoutSwitcher.displayName = "TaskBoardLayoutSwitcher";
