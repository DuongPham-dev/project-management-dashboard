import React from "react";
import clsx from "clsx";

// Constants
import { ColorType } from "@app/constants";

export interface StatusIndicatorProps {
  color?: ColorType;
  size?: keyof typeof STATUS_INDICATOR_SIZE;
}

const STATUS_INDICATOR_COLOR: Record<string, string> = {
  violet: "bg-violet-primary",
  green: "bg-green-primary",
  blue: "bg-blue-primary",
  orange: "bg-orange-primary",
  lavender: "bg-lavender-primary",
  red: "bg-red-primary",
};

const STATUS_INDICATOR_SIZE = {
  xs: "w-1 h-1",
  sm: "w-2 h-2",
};

export const StatusIndicator = ({
  size = "sm",
  color = ColorType.VIOLET,
}: StatusIndicatorProps) => {
  return (
    <span
      className={clsx(
        "inline-block rounded-full",
        STATUS_INDICATOR_SIZE[size],
        STATUS_INDICATOR_COLOR[color]
      )}
    />
  );
};
