import React, { memo, ReactNode } from "react";
import clsx from "clsx";

// UI
import { Box, Text } from "@app/ui";
import Link from "next/link";
import isEqual from "react-fast-compare";

export interface NavigationItem {
  id: number;
  label: string;
  href: string;
  leftIcon?: JSX.Element;
  rightIcon?: ReactNode;
}

export interface NavigationHeader {
  title: string;
  icon?: ReactNode;
}

export interface NavigationProps {
  navigationItems: NavigationItem[];
  header?: NavigationHeader;
  activeItem?: NavigationItem;
}

const NavigationItem = ({
  href,
  label,
  leftIcon,
  rightIcon,
  isActive = false,
}: Omit<NavigationItem, "id"> & { isActive?: boolean }) => (
  <Box as="li">
    <Link
      href={href}
      className={clsx(
        "group flex items-center gap-2 p-2 capitalize rounded-lg font-medium",
        {
          "bg-violet-rgba-light": isActive,
          "hover:bg-violet-rgba-light": !isActive,
        },
        {
          "text-gray-dark": !isActive,
          "hover:text-primary": !isActive,
          "text-primary": isActive,
        }
      )}
    >
      {leftIcon && (
        <Text as="span" className="inline-flex items-center">
          {leftIcon}
        </Text>
      )}
      <Text as="span" className="flex-1">
        {label}
      </Text>
      {rightIcon && (
        <Text
          as="span"
          className={clsx(
            {
              hidden: !isActive,
              "group-hover:inline-flex": !isActive,
            },
            "items-center"
          )}
        >
          {rightIcon}
        </Text>
      )}
    </Link>
  </Box>
);

const Navigation = ({
  navigationItems,
  activeItem,
  header,
}: NavigationProps) => {
  return (
    <Box as="nav">
      {header && (
        <Box className="py-5 px-2 flex items-center">
          <Text className="uppercase text-xs font-bold flex-1">
            {header.title}
          </Text>
          {header?.icon}
        </Box>
      )}
      <Box as="ul" className="flex flex-col gap-3">
        {navigationItems.map(({ id, ...props }) => {
          const isActive = activeItem && activeItem.id === id;

          return <NavigationItem key={id} {...props} isActive={isActive} />;
        })}
      </Box>
    </Box>
  );
};

export default memo(Navigation, isEqual);
