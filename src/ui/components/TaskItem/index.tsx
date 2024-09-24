import React, { memo } from "react";
import { BsThreeDots } from "react-icons/bs";
import { BsChatLeftDots } from "react-icons/bs";
import { CiFileOn } from "react-icons/ci";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

// Components
import {
  Box,
  Button,
  Collaborators as TaskCollaborators,
  Icon,
  Text,
  TaskStatus,
} from "@app/ui";
// Types
import { TaskType } from "@app/types";
// Utils
import { findFirstImageInFiles, getPluralizedLabel } from "@app/utils";
// Constants
import { ColorType, SizeType, TaskPriority } from "@app/constants";

export interface TaskItemProps
  extends Pick<
    TaskType,
    | "assignees"
    | "description"
    | "priority"
    | "title"
    | "commentQuantity"
    | "fileQuantity"
  > {
  href: string;
}

export const TaskItem = memo(
  ({
    title,
    description,
    href,
    priority,
    commentQuantity,
    fileQuantity,
    assignees,
  }: TaskItemProps) => {
    const imageFile = findFirstImageInFiles([]);

    return (
      <Card className="p-6 bg-current overflow-visible cursor-pointer">
        <CardHeader className="block">
          <Box className="flex items-center justify-between">
            <TaskStatus
              label={priority}
              status={priority as unknown as TaskPriority}
            />
            <Button
              isIconOnly
              color={ColorType.TRANSPARENT}
              size={SizeType.FIT}
            >
              <Icon icon={BsThreeDots} color="text-primary" />
            </Button>
          </Box>
          <Text as="h2" className="text-lg pt-2 text-primary font-semibold">
            <Link href={href}>{title}</Link>
          </Text>
        </CardHeader>
        <CardBody className="overflow-visible">
          <Text className="text-xs">{description}</Text>
          {imageFile && (
            <Image
              alt={imageFile.filename}
              className="object-cover rounded-xl w-full"
              src={imageFile.fileURL}
              width={270}
              height={270}
            />
          )}
        </CardBody>
        <CardFooter className="mt-10">
          <Box className="flex justify-between items-center">
            <TaskCollaborators size="xs" members={assignees} />
          </Box>
          <Box className="flex-1 flex items-center justify-end gap-3">
            <Box className="flex items-center gap-1">
              <Icon icon={BsChatLeftDots} size={4} />
              <Text className="text-xs">
                {getPluralizedLabel("comment", { count: commentQuantity })}
              </Text>
            </Box>
            <Box className="flex items-center gap-1">
              <Icon icon={CiFileOn} size={4} />
              <Text className="text-xs">
                {getPluralizedLabel("file", { count: fileQuantity })}
              </Text>
            </Box>
          </Box>
        </CardFooter>
      </Card>
    );
  }
);
TaskItem.displayName = "TaskItem";

export const TaskItemSkeleton = () => <Box></Box>;
