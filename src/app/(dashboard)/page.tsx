import React from "react";
import { FaPencil, FaLink, FaPlus } from "react-icons/fa6";

// Components
import {
  Box,
  Button,
  // Collaborators,
  Icon,
  TaskBoard,
  TasksActionBar,
  Text,
} from "@app/ui";
// Constants
import { ColorType, SizeType } from "@app/constants";
// Mocks
// import { mockTasks } from "@app/mocks";
import { getProjectByID } from "@app/services";

const Homepage = async () => {
  const { title, columns } = await getProjectByID("board1");

  return (
    <>
      <Box className="p-10">
        {/* Display the header my-project */}
        <Box as="section" className="mb-10 flex items-center justify-between">
          <Box className="flex items-center justify-start gap-10">
            <Text
              as="h2"
              className="capitalize font-semibold text-primary text-5xl"
            >
              {title}
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
          <Box className="flex items-center gap-4">
            <Box className="flex items-center gap-2">
              <Button
                isIconOnly
                size={SizeType.FIT}
                color={ColorType.VIOLET_RGBA}
                className="p-1"
              >
                <Icon icon={FaPlus} size={3} />
              </Button>
              <Text className="text-violet-primary">Invite</Text>
            </Box>
            {/* <Collaborators members={mockTasks[0].assignedUserID} /> */}
          </Box>
        </Box>
        <TasksActionBar />
      </Box>
      {/* Display the tasks board */}
      <Box className="flex-1 mx-10 overflow-x-scroll">
        <TaskBoard columns={columns} />
      </Box>
    </>
  );
};

export default Homepage;
