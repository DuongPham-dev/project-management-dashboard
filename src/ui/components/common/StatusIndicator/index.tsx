import React from "react";
import clsx from "clsx";

const STATUS_INDICATOR_COLOR = {
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

export interface StatusIndicatorProps {
  color?: keyof typeof STATUS_INDICATOR_COLOR;
  size?: keyof typeof STATUS_INDICATOR_SIZE;
}

export const StatusIndicator = ({
  size = "sm",
  color = "violet",
}: StatusIndicatorProps) => (
  <span
    className={clsx(
      "inline-block rounded-full",
      STATUS_INDICATOR_SIZE[size],
      STATUS_INDICATOR_COLOR[color]
    )}
  />
);
