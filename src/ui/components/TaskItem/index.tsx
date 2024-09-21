// import Image from "next/image";
import React, { memo } from "react";
import { BsThreeDots } from "react-icons/bs";
import { BsChatLeftDots } from "react-icons/bs";
import { CiFileOn } from "react-icons/ci";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from "@nextui-org/react";

// Components
import {
  Box,
  Button,
  Collaborators as TaskCollaborators,
  Icon,
  Text,
} from "@app/ui";
// Types
import { TaskType } from "@app/types";

export interface TaskItemProps
  extends Pick<TaskType, "description" | "imageUrl" | "priority" | "title"> {
  href: string;
}

export const TaskItem = memo(() => {
  return (
    <Card className="p-6 bg-current">
      <CardHeader className="block">
        <Box className="flex items-center justify-between">
          <Chip className="rounded-lg p-1 bg-orange-rgba-light text-orange-secondary text-xs capitalize">
            low
          </Chip>
          <Button isIconOnly color="none" size="fit">
            <Icon icon={BsThreeDots} color="text-primary" />
          </Button>
        </Box>
        <Text as="h2" className="text-lg pt-2 text-primary font-semibold">
          Brainstorming
        </Text>
      </CardHeader>
      <CardBody className="overflow-visible">
        <Text className="text-xs">
          Brainstorming brings team members&rsquo; diverse experience into play.
        </Text>
        {/* TODO: Will be re-open when start call API and render data from BE response */}
        {/* <Image
          alt="Card background"
          className="object-cover rounded-xl w-full"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
          height={270}
        /> */}
      </CardBody>
      <CardFooter className="mt-10">
        <Box className="flex justify-between items-center">
          <TaskCollaborators size="xs" />
        </Box>
        <Box className="flex-1 flex items-center justify-end gap-3">
          <Box className="flex items-center gap-1">
            <Icon icon={BsChatLeftDots} size={4} />
            <Text className="text-xs">12 comments</Text>
          </Box>
          <Box className="flex items-center gap-1">
            <Icon icon={CiFileOn} size={4} />
            <Text className="text-xs">0 files</Text>
          </Box>
        </Box>
      </CardFooter>
    </Card>
  );
});
TaskItem.displayName = "TaskItem";

export const TaskItemSkeleton = () => <Box></Box>;
