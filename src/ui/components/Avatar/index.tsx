import { User } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

// Constants
import { ROUTER } from "@app/constants";

export interface AvatarProps {
  username: string;
  location: string;
  userImage: string;
}

export const Avatar = ({ location, userImage, username }: AvatarProps) => (
  <Link href={ROUTER.PROFILE}>
    <User
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
