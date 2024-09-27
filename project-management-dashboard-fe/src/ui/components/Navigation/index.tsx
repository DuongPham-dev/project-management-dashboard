import React, { memo, ReactNode } from "react";
import clsx from "clsx";
import isEqual from "react-fast-compare";
import Link from "next/link";

// UI
import { Box, Text } from "@app/ui";

export interface NavigationItemCustomProps
  extends Omit<NavigationItemProps, "render"> {
  isActive: boolean;
}

export interface NavigationItemProps {
  id: number;
  label: string;
  href: string;
  leftIcon?: JSX.Element;
  rightIcon?: ReactNode;
  render?: (props: NavigationItemCustomProps) => JSX.Element;
}

export interface NavigationHeader {
  title: string;
  icon?: ReactNode;
}

export interface NavigationProps {
  navigationItems: NavigationItemProps[];
  header?: NavigationHeader;
  activePath?: NavigationItemProps["href"];
  isCollapse?: boolean;
}

export const NavigationItem = ({
  href,
  label,
  leftIcon,
  rightIcon,
  isActive = false,
  isCollapse,
}: Omit<NavigationItemProps, "id"> & {
  isActive?: boolean;
  isCollapse?: boolean;
}) => (
  <Box as="li">
    <Link
      href={href}
      className={clsx(
        "group flex items-center gap-2 p-2 capitalize rounded-md font-medium",
        {
          "justify-center": isCollapse,
        },
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
        <Text as="span" className="flex items-center text-inherit">
          {leftIcon}
        </Text>
      )}
      {!isCollapse && (
        <>
          <Text as="span" className="flex-1 text-inherit">
            {label}
          </Text>
          {rightIcon && (
            <Text
              as="span"
              className={clsx(
                {
                  hidden: !isActive,
                  "group-hover:flex": !isActive,
                },
                "items-center text-inherit"
              )}
            >
              {rightIcon}
            </Text>
          )}
        </>
      )}
    </Link>
  </Box>
);

const Navigation = ({
  navigationItems,
  activePath,
  header,
  isCollapse = false,
}: NavigationProps) => (
  <Box as="nav">
    {header && (
      <Box className="py-5 px-2 flex items-center">
        <Text className={clsx("uppercase text-xs font-bold flex-1")}>
          {header.title}
        </Text>
        {!isCollapse && header?.icon}
      </Box>
    )}
    <Box as="ul" className="flex flex-col gap-3">
      {navigationItems.map(({ id, render, ...props }) => {
        const isActive = !!activePath && activePath === props.href;

        return (
          <>
            {render ? (
              render({ id, isActive, ...props })
            ) : (
              <NavigationItem
                key={id}
                {...props}
                isActive={isActive}
                isCollapse={isCollapse}
              />
            )}
          </>
        );
      })}
    </Box>
  </Box>
);

export default memo(Navigation, isEqual);
