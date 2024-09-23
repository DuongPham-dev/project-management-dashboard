import React from "react";
import { FaPencil, FaLink } from "react-icons/fa6";

// Components
import { Box, Button, Icon, TaskBoard, Text } from "@app/ui";
// Constants
import { ColorType, SizeType } from "@app/constants";

const Homepage = () => {
  return (
    <Box>
      <Box as="header" className="mb-10">
        <Box className="flex items-center justify-start gap-10">
          <Text
            as="h2"
            className="capitalize font-semibold text-primary text-5xl"
          >
            Mobile app
          </Text>
          <Box className="flex items-center justify-start gap-5">
            <Button
              isIconOnly
              color={ColorType.VIOLET_RGBA}
              size={SizeType.FIT}
              className="p-2"
            >
              <Icon icon={FaPencil} size={3} />
            </Button>
            <Button
              isIconOnly
              color={ColorType.VIOLET_RGBA}
              size={SizeType.FIT}
              className="p-2"
            >
              <Icon icon={FaLink} size={3} />
            </Button>
          </Box>
        </Box>
      </Box>
      <TaskBoard />
    </Box>
  );
};

export default Homepage;
