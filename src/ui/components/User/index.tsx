import { User as UserNextUI } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

// Constants
import { ROUTER } from "@app/constants";

export interface UserProps {
  username: string;
  location: string;
  userImage: string;
}

export const User = ({ location, userImage, username }: UserProps) => (
  <Link href={ROUTER.PROFILE}>
    <UserNextUI
      name={username}
      classNames={{
        base: "flex-row-reverse",
        wrapper: "items-end",
        description: "text-sm text-gray-dark",
      }}
      description={location}
      avatarProps={{
        src: userImage,
        classNames: {
          img: "opacity-1",
        },
      }}
    />
  </Link>
);
