import React from "react";
import Link from "next/link";

// UI
import { AppIcon, Text } from "@app/ui";
// Constants
import { APP_TITLE, ROUTER } from "@app/constants";

export const Logo = () => (
  <Link href={ROUTER.ROOT} className="flex gap-3 font-semibold text-xl">
    <Text as="span">
      <AppIcon />
    </Text>
    <Text as="span">{APP_TITLE}</Text>
  </Link>
);
