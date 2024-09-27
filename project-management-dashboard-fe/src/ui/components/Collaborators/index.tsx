"use client";

import React, { memo } from "react";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import isEqual from "react-fast-compare";
import clsx from "clsx";

// Types
import { UserType } from "@app/types";

export interface CollaboratorsProps {
  members: UserType[]; // TODO: Will update type when start build up DB
  maxDisplayed?: number;
  size?: keyof typeof SIZE;
}

const SIZE = {
  xs: "w-6 h-6",
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-14 h-15",
};

export const Collaborators = memo(
  ({ maxDisplayed = 3, size = "sm", members = [] }: CollaboratorsProps) => {
    const isValidMember = Boolean(members);

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
        {isValidMember &&
          members.map(({ avatarURL }, key) => {
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
                src={avatarURL}
              />
            );
          })}
      </AvatarGroup>
    );
  },
  isEqual
);

Collaborators.displayName = "Collaborators";
