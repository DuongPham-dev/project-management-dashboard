import React from "react";
import { FaPencil, FaLink, FaPlus } from "react-icons/fa6";

// Components
import { Box, Button, Icon, TaskBoard, Text } from "@app/ui";
// Constants
import { ColorType, SizeType } from "@app/constants";

const Homepage = () => {
  return (
    <>
      <Box
        as="section"
        className="p-10 mb-10 flex items-center justify-between"
      >
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
        <Box className="flex items-center gap-3">
          <Box className="flex items-center gap-3">
            <Button isIconOnly>
              <Icon icon={FaPlus} />
            </Button>
            <Text className="text-primary ">Invite</Text>
          </Box>
        </Box>
      </Box>
      <Box className="flex-1 px-10 overflow-x-scroll">
        <TaskBoard />
      </Box>
    </>
  );
};

export default Homepage;
