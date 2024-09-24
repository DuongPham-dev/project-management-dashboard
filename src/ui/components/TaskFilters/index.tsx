import React, { memo } from "react";
import { CiCalendarDate, CiFilter } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

// Components
import { Box, Button, Icon } from "@app/ui";
// Constants
import { ColorType } from "@app/constants";

// TODO: Will add the type when making the features
export interface TaskFiltersProps {}

export const TaskFilters = memo(() => {
  return (
    <Box className="flex items-center gap-5">
      <Button
        variant="bordered"
        color={ColorType.GRAY}
        startContent={<Icon icon={CiFilter} size={5} />}
        endContent={<Icon icon={IoIosArrowDown} size={5} />}
        className="box-content px-4 py-1"
      >
        Filter
      </Button>
      <Button
        variant="bordered"
        color={ColorType.GRAY}
        startContent={<Icon icon={CiCalendarDate} size={5} />}
        endContent={<Icon icon={IoIosArrowDown} size={5} />}
        className="box-content px-4 py-1"
      >
        Today
      </Button>
    </Box>
  );
});

TaskFilters.displayName = "TaskFilters";
