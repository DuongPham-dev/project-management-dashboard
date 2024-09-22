"use client";

import React, { memo } from "react";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import isEqual from "react-fast-compare";
import clsx from "clsx";
import { UserType } from "@app/types";

export interface CollaboratorsProps {
  maxDisplayed?: number;
  size?: keyof typeof SIZE;
  members?: UserType["id"][]; // TODO: Will update type when start build up DB
}

const SIZE = {
  xs: "w-6 h-6",
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-14 h-15",
};

export const Collaborators = memo(
  ({ maxDisplayed = 3, size = "sm", members = [] }: CollaboratorsProps) => {
    const memberSize = members.length;
    const isValidMember = Boolean(memberSize);
    // TODO: Will be remove when "members" prop is  ready
    const mockMember = Array.from({ length: isValidMember ? memberSize : 3 });

    return (
      <AvatarGroup
        max={maxDisplayed}
        isBordered
        classNames={{
          count: clsx(
            "rtl:data-[hover=true]:translate-x-0 data-[hover=true]:-translate-x-0 ring-0 bg-red-secondary text-red-tertiary",
            SIZE[size]
          ),
        }}
      >
        {mockMember.map((_, key) => {
          return (
            <Avatar
              key={key}
              classNames={{
                img: "opacity-1",
                base: clsx(
                  "border-current ring-0 rtl:data-[hover=true]:translate-x-0 data-[hover=true]:-translate-x-0",
                  SIZE[size]
                ),
              }}
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            />
          );
        })}
      </AvatarGroup>
    );
  },
  isEqual
);

Collaborators.displayName = "Collaborators";
