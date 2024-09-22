// import Image from "next/image";
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

export interface TaskItemProps
  extends Pick<
    TaskType,
    "description" | "files" | "priority" | "assignedUserID" | "title"
  > {
  href: string;
  commentSize?: number;
}

export const TaskItem = memo(
  ({
    title,
    description,
    href,
    priority,
    commentSize = 0,
    files = [],
    assignedUserID,
  }: TaskItemProps) => {
    const imageFile = findFirstImageInFiles(files);

    return (
      <Card className="p-6 bg-current overflow-visible cursor-pointer">
        <CardHeader className="block">
          <Box className="flex items-center justify-between">
            <TaskStatus label={priority} status={priority} />
            <Button isIconOnly color="none" size="fit">
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
            <TaskCollaborators size="xs" members={assignedUserID} />
          </Box>
          <Box className="flex-1 flex items-center justify-end gap-3">
            <Box className="flex items-center gap-1">
              <Icon icon={BsChatLeftDots} size={4} />
              <Text className="text-xs">
                {getPluralizedLabel("comment", { count: commentSize })}
              </Text>
            </Box>
            <Box className="flex items-center gap-1">
              <Icon icon={CiFileOn} size={4} />
              <Text className="text-xs">
                {getPluralizedLabel("file", { count: files.length })}
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
